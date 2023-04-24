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
            <p>-------------</p>
            {articles && (
                <div>
                    {articles.map((article, index) => (
                        <div key={index}>
                            <h1>{article.title}</h1>
                            <p>{article.content}</p>
                            <p>published date</p>
                            <p>*********************</p>
                            <table>
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
                                    <td>{relation.relation_type.is_unique}</td>
                                </tr>
                            ))} 
                            </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            )}
            <p>---------------</p>
        </>
    )
}

export default ArticleOverviewTable