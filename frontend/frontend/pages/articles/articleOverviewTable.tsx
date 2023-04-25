import Articles from '.'
import { Article, Relation, Relation_type} from '../../types'
import React from 'react'
import RelationService from '@/services/relationService'
import { relative } from 'path'
import { useState, useEffect } from "react"
import AddRelationForm from '../relations/addRelation'
import RelationOverviewTable from '../relations/relationOverview'

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
            <div id="article-overview" >
                {articles && (
                    <div>
                        {articles.map((article, index) => (
                            <div key={index} className='container mx-auto article-container'>
                                <h1>Title: <b>{article.title}</b></h1>
                                <p>published date: {new Date(article.date_published).toLocaleDateString()}</p>
                                <p>{article.content}</p>
                                <RelationOverviewTable article={article}/>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
        </>
    )
}

export default ArticleOverviewTable