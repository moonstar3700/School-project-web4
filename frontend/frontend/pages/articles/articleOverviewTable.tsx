import Articles from '.'
import { Article, Relation, Relation_type} from '../../types'
import React from 'react'
import RelationService from '@/services/relationService'
import { relative } from 'path'

type Props = {
    articles: Array<Article>
}

const deleteButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = event.currentTarget;
}

const removeRelation  = async (id: number) => {
    RelationService.deleteRelation(id)
}

const ArticleOverviewTable: React.FC<Props> = ({articles}: Props) => {
    if (articles.length === 0) {
        return (
            <>
                <p>No articles have been added yet</p>
            </>
        )
    }
    return (
        <>
            <div id="article-overview" >
                {articles && (
                    <div>
                        {articles.map((article, index) => (
                            <div key={index} className='container mx-auto article-container'>
                                <h1>Title: <b>{article.title}</b></h1>
                                <p>published date: </p>
                                <p>{article.content}</p>
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
                                        <td>{relation.relation_type.is_unique.valueOf()}</td>
                                        <td><button>update</button></td>
                                        <td><button onClick={(event) => removeRelation(relation.relation_id)}>delete</button></td>
                                    </tr>
                                ))} 
                                </tbody>
                                </table>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
        </>
    )
}

export default ArticleOverviewTable