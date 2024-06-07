const formatSubject= (subject)=>{
    const formatedSubject={
        id: subject.id,
        name: subject.name,
        description: subject.description,
        code: subject.code,
        credits: subject.credits
    }
    return formatedSubject;
}

module.exports= formatSubject;