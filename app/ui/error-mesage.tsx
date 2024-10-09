import React from 'react';

interface ErrorMessageProps {
  message: string | undefined;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
	<div className="text-red-500 text-sm mt-2">
	  {message || null}
	</div>
  );
};

export default ErrorMessage;