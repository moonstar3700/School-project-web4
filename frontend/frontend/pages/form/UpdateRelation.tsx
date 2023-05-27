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
        try {
            await RelationService.updateRelation(
                relation.relation_id,
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
    return (
        <RelationForm onClose={onClose} relation={relation} handleSubmit={updateRelationFunction} />
    );
};

export default UpdateRelationForm;
