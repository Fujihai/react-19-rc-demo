const wait = (delay) => {
    return new Promise(res => setTimeout(res, delay))
}

const FormAction = async (prevState, formData)  => {
    const sname = formData.get('sname')
    await wait(3000)
    if(sname) return { message: `Student Name=${sname}` }
    else return { message: 'Student Name is not inserted' }
}

export default FormAction;