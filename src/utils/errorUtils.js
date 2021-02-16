// Use if api respond to a fetch with an error

const errorMessages = (data) => (data.message[0].messages.reduce((finalMessage, errorMessage) => finalMessage + errorMessage.message, ''));

export default errorMessages;
