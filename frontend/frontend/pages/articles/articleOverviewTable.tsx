import Articles from '.'
import { Article, Relation, Relation_type} from '../../types'
import React from 'react'

type Props = {
    articles: Array<Article>
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
            <div >
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
                                        </tr>
                                    </thead>
                                <tbody>
                                {article.relations?.map((relation, index) => (
                                    <tr key={index}>
                                        <td>{relation.subject_entity}</td>
                                        <td>{relation.relation_type.type_name}</td>
                                        <td>{relation.object_entity}</td>
                                        <td>{relation.relation_type.is_unique.valueOf()}</td>
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