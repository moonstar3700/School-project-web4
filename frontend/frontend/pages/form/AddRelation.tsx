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
        try {
            await RelationService.addRelation(
                article_id,
                sentence,
                subject,
                type,
                object,
                is_unique
            );
            onClose();
        } catch (error: any) {
            console.log(error.response.data.errorMessage);
        } finally {
        }
    };
    return <RelationForm onClose={onClose} handleSubmit={addRelationFunction} />;
};

export default AddRelationForm;
