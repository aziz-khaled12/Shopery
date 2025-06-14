import React from 'react'

const FormContainer = ({ title="Form Title", description, children, className="" }) => {
  return (
    <div className={`${className} w-full`}>
        <h2 className="text-2xl font-medium mb-5">{title}</h2>
        {description && <p className="text-sm text-gray-500 mb-6">{description}</p>}
        {children}
    </div>
  )
}

export default FormContainer