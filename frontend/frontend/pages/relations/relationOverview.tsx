import { Article, Relation, Relation_type } from '../../types';
import React from 'react';
import RelationService from '@/services/relationService';
import { relative } from 'path';
import { useState, useEffect } from 'react';
import UpdateRelation from '../form/UpdateRelation';
import ConfirmDelete from '../relations/deleteRelation';
import { on } from 'events';
type Props = {
    article: Article;
};

const RelationOverviewTable: React.FC<Props> = ({ article }: Props) => {
    const [currentRelation, setCurrentRelation] = useState<Relation>();

    const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
    const [updateRelation, setUpdateRelation] = useState<boolean>(false);

    const onOpenUpdateRelation = () => {
        setUpdateRelation(true);
    };
    const onCloseUpdateRelation = () => {
        setUpdateRelation(false);
    };

    const onOpenConfirmDelete = () => {
        setConfirmDelete(true);
    };
    const onCloseConfirmDelete = () => {
        setConfirmDelete(false);
    };

    return (
        <div className="mt-3 overflow-x-auto ">
            {currentRelation && updateRelation ? (
                <UpdateRelation
                    relation={currentRelation}
                    onClose={onCloseUpdateRelation}
                ></UpdateRelation>
            ) : (
                ''
            )}
            {currentRelation && confirmDelete ? (
                <ConfirmDelete
                    relation={currentRelation}
                    onClose={onCloseConfirmDelete}
                ></ConfirmDelete>
            ) : (
                ''
            )}
            <div className="inline-block min-w-full align-middle">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                        <tr>
                            <th
                                scope="col"
                                className="py-3.5  pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                            >
                                Subject
                            </th>
                            <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                                Verb
                            </th>
                            <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                                Context
                            </th>
                            <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                                Is unique
                            </th>
                            <th
                                scope="col"
                                className="pr-3 py-3.5 text-right text-sm font-semibold text-gray-900"
                            >
                                manage
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {article.relations?.map((relation, index) => (
                            <tr className="even:bg-gray-50" key={index}>
                                <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-3">
                                    {relation.subject_entity}
                                </td>
                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                    {relation.relation_type.type_name}
                                </td>
                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                    {relation.object_entity}
                                </td>
                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                    {String(relation.relation_type.is_unique)}
                                </td>
                                <td className="relative py-4 pr-3 text-sm font-medium text-right whitespace-nowrap ">
                                    <a
                                        onClick={() => {
                                            onOpenUpdateRelation();
                                            setCurrentRelation(relation);
                                        }}
                                        className="text-indigo-600 hover:text-indigo-900"
                                    >
                                        Edit
                                        <span className="sr-only">, person.name</span>
                                    </a>
                                    <a
                                        onClick={() => {
                                            onOpenConfirmDelete();
                                            setCurrentRelation(relation);
                                        }}
                                        className="ml-3 text-indigo-600 hover:text-indigo-900"
                                    >
                                        Delete
                                        <span className="sr-only">, person.name</span>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RelationOverviewTable;
