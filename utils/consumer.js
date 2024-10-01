const {Kafka} = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092', 'localhost:9092']
})

const consumer = kafka.consumer({ groupId: 'kafka' })

const run = async() => {
  await consumer.connect()
  await consumer.subscribe({ topic: 'test_topic', fromBeginning })

  await consumer.run({
    eachMessage: async ({partition, message}) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      })
    }
  })
}