import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import { Relation } from '@/types';

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}

interface RelationFormProps {
    onClose: () => void;
    handleSubmit: (
        subject: string,
        sentence: string,
        object: string,
        type: string,
        is_unique: boolean
    ) => Promise<string>;
    relation?: Relation;
}
const RelationForm: React.FC<RelationFormProps> = ({ relation, onClose, handleSubmit }) => {
    const [isUnique, setIsUnique] = useState<boolean>(relation?.relation_type.is_unique || false);
    const [subjectInput, setSubjectInput] = useState<string>(relation?.subject_entity || '');
    const [typeInput, setTypeInput] = useState<string>(relation?.relation_type.type_name || '');
    const [objectInput, setObjectInput] = useState<string>(relation?.object_entity || '');
    const [sentence, setSentence] = useState<string>(relation?.sentence || '');

    // error messages
    const [formError, setFormError] = useState<string>('');

    const onSubmit = async (event: any) => {
        event.preventDefault();
        setFormError(await handleSubmit(subjectInput, sentence, objectInput, typeInput, isUnique));
    };
    return (
        <div className="fixed inset-0 transition-opacity delay-100 bg-gray-500 bg-opacity-75">
            {formError && (
                <div
                    className="p-4 text-orange-700 bg-orange-100 border-l-4 border-orange-500"
                    role="alert"
                >
                    <p>{formError && formError}</p>
                </div>
            )}

            <div className="fixed inset-0 ">
                <form className="fixed w-1/3 bg-white divide-y shadow-sm z-2 left-1/3 top-1/4 divide-gray-900/10 ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                    <div className="px-4 py-6 sm:p-8">
                        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="first-name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Subject
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={subjectInput}
                                        onChange={(event) => setSubjectInput(event.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="last-name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Relation
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={typeInput}
                                        onChange={(event) => setTypeInput(event.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-full">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    object
                                </label>
                                <div className="flex w-full gap-4 mt-2">
                                    <input
                                        id="sentence"
                                        name="sentence"
                                        type="text"
                                        autoComplete="sentence"
                                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={objectInput}
                                        onChange={(event) => setObjectInput(event.target.value)}
                                    />
                                    <div className="flex items-center justify-center">
                                        <label
                                            htmlFor="sentence"
                                            className="block mr-2 text-sm font-medium leading-6 text-gray-900 whitespace-nowrap"
                                        >
                                            Unique Relation
                                        </label>

                                        <div className="flex items-center justify-center h-5">
                                            <Switch
                                                checked={isUnique}
                                                onChange={setIsUnique}
                                                className={classNames(
                                                    isUnique ? 'bg-indigo-600' : 'bg-gray-200',
                                                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
                                                )}
                                            >
                                                <span className="sr-only">Use setting</span>
                                                <span
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        isUnique
                                                            ? 'translate-x-5'
                                                            : 'translate-x-0',
                                                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                                    )}
                                                />
                                            </Switch>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label
                                    htmlFor="sentence"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Sentence
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="sentence"
                                        id="sentence"
                                        autoComplete="sentence"
                                        className="block w-full rounded-md border-0 px-2  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={sentence}
                                        onChange={(event) => setSentence(event.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-end px-4 py-4 border-t gap-x-6 border-gray-900/10 sm:px-8">
                        <button
                            onClick={onClose}
                            type="button"
                            className="text-sm font-semibold leading-6 text-gray-900"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={onSubmit}
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RelationForm;
