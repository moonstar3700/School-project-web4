import Head from 'next/head';
import Header from '@/components/header';
import { useState, useEffect } from 'react';
import { Article, Relation, Relation_type } from '../../types';
import ArticleOverviewTable from './articleOverviewTable';
import ArticleService from '@/services/articleService';

const Articles: React.FC = () => {
    const [articles, setArticles] = useState<Array<Article>>([]);

    const getArticles = async () => {
        await ArticleService.getAllArticles()
            .then((res) => res.json())
            .then((articles) => setArticles(articles));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            getArticles();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <ArticleOverviewTable articles={articles} />
        </>
    );
};

export default Articles;
