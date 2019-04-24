import {Callback, Context, Handler} from 'aws-lambda'


export const hello: Handler = async (event: any, context: Context, callback: Callback) => {
  return {
    statusCode: 200,
    headers: {'Access-Control-Allow-Origin': '*'},
    body: JSON.stringify({message: `ayyyy lmao`})
  }
}

// parse the event params
export const parameterExample: Handler = async (event: any, context: Context, callback: Callback) => {
  const id = event.pathParameters.id

  return {
    statusCode: 200,
    headers: {'Access-Control-Allow-Origin': '*'},
    body: JSON.stringify({message: `Retrieved a parameter with id ${id}`})
  }
}



