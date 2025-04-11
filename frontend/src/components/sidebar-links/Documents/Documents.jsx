import React from 'react';
import SubmitCard from './SubmitCard';
import SaveButton from '../../buttons/SaveButton';
import EditButton from '../../buttons/EditButton';
import { useSelector } from 'react-redux';

const Documents = () => {
  const isEditing = useSelector((state) => state.edit.editStates["documents_section"]) || false;

  return (
    <div className='min-h-screen  md:px-12 w-full max-w-6xl flex flex-col'>
      <header className='flex flex-col md:flex-row justify-between items-start md:items-center mb-6'>
        <h2 className="text-xl font-semibold mb-2 md:mb-0">Documents Details</h2>
        <div className='md:mr-10'>
          <EditButton id="documents_section" />
        </div>
      </header>

      <div className='flex flex-col gap-6'>
        <SubmitCard item="Aadhar Card Front Side" disabled={!isEditing} />
        <SubmitCard item="Aadhar Card Back Side" disabled={!isEditing} />
        <SubmitCard item="Your Selfie" disabled={!isEditing} />
      </div>

      {isEditing && (
        <div className='mt-8'>
          <SaveButton />
        </div>
      )}
    </div>
  );
};

export default Documents;
