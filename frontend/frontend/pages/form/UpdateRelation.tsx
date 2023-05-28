/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import RelationService from '@/services/relationService';
import RelationForm from './RelationForm';
import { Relation } from '@/types';

interface Props {
    relation: Relation;
    onClose: () => void;
}

const UpdateRelationForm: React.FC<Props> = ({ onClose, relation }: Props) => {
    const updateRelationFunction = async (
        subject: string,
        sentence: string,
        object: string,
        type: string,
        is_unique: boolean
    ) => {
        console.log('lol', subject, sentence, object, type, is_unique);
        let response_message = 'Something went wrong';
        try {
            const response = await RelationService.updateRelation(
                relation.relation_id,
                sentence,
                subject,
                type,
                object,
                is_unique
            );
            if (response.status === 200) {
                onClose();
            }
            response_message = await response.json().then((data) => {
                console.log(data);
                return data.errorMessage;
            });
        } catch (error: any) {
            response_message = await error.response.data.errorMessage;
        } finally {
        }
        return response_message;
    };
    return (
        <RelationForm onClose={onClose} relation={relation} handleSubmit={updateRelationFunction} />
    );
};

export default UpdateRelationForm;
