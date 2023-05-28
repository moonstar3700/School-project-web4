import RelationService from '@/services/relationService';
import { Relation } from '@/types';
import { Dialog } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

interface ConfirmDeleteProps {
    onClose: () => void;
    relation: Relation;
}
const ConfirmDelete: React.FC<ConfirmDeleteProps> = ({ relation, onClose }) => {
    // delete relation

    const confirmDelete = () => {
        RelationService.deleteRelation(relation.relation_id);
        onClose();
    };

    return (
        <div className="fixed inset-0 transition-opacity delay-100 bg-gray-500 bg-opacity-75">
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
                    <div className="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                        <div className="sm:flex sm:items-start">
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                                <ExclamationTriangleIcon
                                    className="w-6 h-6 text-red-600"
                                    aria-hidden="true"
                                />
                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <h3 className="text-base font-semibold leading-6 text-gray-900">
                                    Delete Relation
                                </h3>
                                <div className="mt-2">
                                    {/* ask if you are sure you want to delete this relation and show some relation propergties so the user knows wich relation we mean*/}
                                    <p className="text-sm text-gray-500">
                                        Are you sure you want to delete the relation between{' '}
                                        <span className="font-semibold">
                                            {relation.subject_entity}
                                        </span>{' '}
                                        and{' '}
                                        <span className="font-semibold">
                                            {relation.object_entity}
                                        </span>{' '}
                                        in sentence{' '}
                                        <span className="font-semibold">{relation.sentence}</span>?
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 sm:ml-10 sm:mt-4 sm:flex sm:pl-4">
                            <button
                                type="button"
                                className="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-red-600 rounded-md shadow-sm hover:bg-red-500 sm:w-auto"
                                onClick={confirmDelete}
                            >
                                Delete
                            </button>
                            <button
                                type="button"
                                className="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:ml-3 sm:mt-0 sm:w-auto"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDelete;
