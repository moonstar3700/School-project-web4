import { Article, Relation, Relation_type, StatusMessage} from '../../types'
import React from 'react'
import { useState, useEffect } from "react"
import RelationService from '@/services/relationService'

type Props = {
    article_id: number
}

const AddRelationForm: React.FC<Props> = (article_id: Props) => {

    const [isUnique, setIsUnique] = useState<boolean>(false);
    const [subjectInput, setSubjectInput] = useState<string>('');
    const [typeInput, setTypeInput] = useState<string>('');
    const [objectInput, setObjectInput] = useState<string>('')

    const addRelationFunction = async (subject: string, object: string, type: string, is_unique: boolean) => {
        try {
            await RelationService.addRelation(article_id.article_id, subject, type, object, is_unique)
        } catch (error: any){
            console.log(error.response.data.errorMessage)
        } finally {

        }
        
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        addRelationFunction(subjectInput, objectInput, typeInput, isUnique)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>subject</label>
                <input type="text"
                value={subjectInput}
                onChange={(event) => setSubjectInput(event.target.value)} />
                
                <label>type</label>
                <input type="text"
                value={typeInput}
                onChange={(event) => setTypeInput(event.target.value)} />
                
                <label> is unique</label>
                <input type="checkbox"
                checked = {isUnique}
                 />
                
                <label>content</label>
                <textarea maxLength={256}
                    value={objectInput}
                    onChange={(event) => setObjectInput(event.target.value)}></textarea>

                <input type="submit" value="Add"/>
            </form>
        </>
    )
}

export default AddRelationForm