import { Article, Relation, Relation_type} from '../../types'
import React from 'react'
import RelationService from '@/services/relationService'
import { relative } from 'path'
import { useState, useEffect } from "react"
import AddRelationForm from '../relations/addRelation'

type Props = {
    article: Article
}

const RelationOverviewTable: React.FC<Props> = ({article}: Props) => {
    
    const [addFormIndex, setAddFormIndex] = useState<number>(0)

    const FormIndex = (index: number) => {
        setAddFormIndex(index)
    }

    const removeRelation = async (id: number) => {
        RelationService.deleteRelation(id)
    }
    
    return (
        <>
                                <table id='relation-table'>
                                    <thead>
                                        <tr>
                                            <th>Subject</th>
                                            <th>Type</th>
                                            <th>Context</th>
                                            <th>Is unique</th>
                                            <th>update</th>
                                            <th>delete</th>
                                        </tr>
                                    </thead>
                                <tbody>
                                {article.relations?.map((relation, index) => (
                                    <tr key={index}>
                                        <td>{relation.subject_entity}</td>
                                        <td>{relation.relation_type.type_name}</td>
                                        <td>{relation.object_entity}</td>
                                        <td>{String(relation.relation_type.is_unique)}</td>
                                        <td><button>update</button></td>
                                        <td><button onClick={(event) => removeRelation(relation.relation_id)}>delete</button></td>
                                    </tr>
                                ))} 
                                </tbody>
                                </table>
                                

                                {addFormIndex !== article.article_id && (
                                    <button onClick={(event) => FormIndex(article.article_id)}>add relation</button>
                                )}
                                {addFormIndex === article.article_id &&(
                                    <div>
                                        <AddRelationForm article_id={article.article_id}/>
                                    </div>
                                    
                                )}
        </>
    )

}

export default RelationOverviewTable