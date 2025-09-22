import React from 'react';
import { useParams } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams();
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <p>Edit post form for post {id} will be here.</p>
      </div>
    </div>
  );
};

export default EditPost;
