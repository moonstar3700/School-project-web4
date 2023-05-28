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

interface Props {
    article_id: number;
    onClose: () => void;
}

const AddRelationForm: React.FC<Props> = ({ onClose, article_id }: Props) => {
    const addRelationFunction = async (
        subject: string,
        sentence: string,
        object: string,
        type: string,
        is_unique: boolean
    ) => {
        console.log(subject, sentence, object, type, is_unique);
        let response_message = 'Something went wrong';
        try {
            const response = await RelationService.addRelation(
                article_id,
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
    return <RelationForm onClose={onClose} handleSubmit={addRelationFunction} />;
};

export default AddRelationForm;
