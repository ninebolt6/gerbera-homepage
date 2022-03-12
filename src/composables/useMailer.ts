const useMailer = () => {
  const checkEmailValidation = (email: string) => {
    const regex = /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/
    return regex.test(email)
  }
  const sendMail = () => {
    console.log("send!")
  }

  return {
    checkEmailValidation,
    sendMail,
  }
}

export default useMailer
