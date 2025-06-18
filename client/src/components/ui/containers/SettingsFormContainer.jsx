import React from 'react'

const SettingsFormContainer = ({title, children}) => {
  return (
    <div className="w-full border border-gray-200 rounded-lg ">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-2xl font-medium">{title}</h2>
        </div>
        {children}
      </div>
  )
}

export default SettingsFormContainer