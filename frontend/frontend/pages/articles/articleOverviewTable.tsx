import Articles from '.';
import { Article, Relation, Relation_type } from '../../types';

import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

import { useState, Fragment, useEffect, use } from 'react';
import AddRelationForm from '../relations/addRelation';
import RelationOverviewTable from '../relations/relationOverview';
import { getEmployeesNotAsigned, assignEmployee } from '../../services/employeeService';
import Pagination from '../pagination';
import AddRelation from '../form/AddRelation';
import Select from 'react-select';
import { on } from 'events';
type Props = {
    articles: Array<Article>;
};

const ArticleOverviewTable: React.FC<Props> = ({ articles }: Props) => {
    const [page, setPage] = useState<number>(0);
    const currenArticle = articles[page];
    const [addRelationOpen, setAddRelationOpen] = useState<boolean>(false);
    const [options, setOptions] = useState<any>([]);
    const [optionsLoading, setOptionsLoading] = useState<boolean>(true);

    useEffect(() => {
        loadOptions();
    }, [currenArticle]);

    const loadOptions = async () => {
        if (!currenArticle) return;
        const empoloyees = await getEmployeesNotAsigned(currenArticle.article_id).then(
            (response) => {
                return response.json();
            }
        );
        const options = empoloyees.map((employee: { employee_id: string; name: string }) => {
            return {
                value: employee.employee_id,
                label: employee.name,
            };
        });
        setOptions(options);
        setOptionsLoading(false);
    };

    const onAssign = (value: any) => {
        console.log(value);
        // loop over all selected values and assign them

        assignEmployee(currenArticle.article_id, value.value).then((response) => {
            loadOptions();
        });
    };
    const onOpenAddArticle = () => {
        setAddRelationOpen(true);
    };
    const onCloseAddArticle = () => {
        setAddRelationOpen(false);
    };
    console.log(currenArticle?.article_id);

    return (
        <div className="px-6 pb-32 mx-auto max-w-7xl pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            {currenArticle?.article_id && addRelationOpen ? (
                <AddRelation
                    article_id={currenArticle.article_id}
                    onClose={onCloseAddArticle}
                ></AddRelation>
            ) : (
                ''
            )}

            <h1 className="mb-12 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Processed Articles
            </h1>
            {currenArticle ? (
                <>
                    {
                        <div className="px-6 py-10 mt-20 mb-16 border rounded-md ">
                            <div className="justify-center w-full sm:flex sm:items-center">
                                <div className="mt-4 sm:mt-0 sm:flex-auto">
                                    <p className="text-sm text-gray-700 ">
                                        published date: <br />
                                        {new Date(
                                            currenArticle.date_published
                                        ).toLocaleDateString()}
                                    </p>
                                </div>
                                <div className="flex justify-between w-1/2 ">
                                    <div className="flex items-center gap-x-2">
                                        <label>Assigned To:</label>
                                        <Select
                                            className="w-36"
                                            options={options}
                                            isSearchable={true}
                                            onChange={onAssign}
                                        />
                                    </div>
                                    <button
                                        onClick={onOpenAddArticle}
                                        type="button"
                                        className="block px-3 py-2 text-sm font-semibold text-center text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Add Relation
                                    </button>
                                </div>
                            </div>
                            <div className="flex mt-10 h-96">
                                <div className="w-1/2 max-w-2xl mx-auto overflow-auto lg:mx-0 lg:max-w-none">
                                    <h2 className="font-bold tracking-tight text-gray-900 sm:text-3xl">
                                        {currenArticle.title}
                                    </h2>
                                    <div className="flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                                        <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                                            <div className="max-w-xl mt-4 text-base leading-7 text-gray-700">
                                                <p>{currenArticle.content}</p>
                                            </div>
                                        </div>
                                        <div className="lg:flex lg:flex-auto lg:justify-center"></div>
                                    </div>
                                </div>
                                <div className="w-1/2 overflow-auto">
                                    <RelationOverviewTable article={currenArticle} />
                                </div>
                            </div>
                        </div>
                    }
                </>
            ) : (
                <p>No artciles to show</p>
            )}
            <Pagination page={page} setPage={setPage} totalPages={articles.length} />
        </div>
    );
};

export default ArticleOverviewTable;
