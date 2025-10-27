import { message } from 'antd';
import { createContext, useContext } from 'react';

const MessageContext = createContext<ReturnType<
  typeof message.useMessage
> | null>(null);

export const MessageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const messageApi = message.useMessage();
  return (
    <MessageContext.Provider value={messageApi}>
      {messageApi[1]} {/* contextHolder*/}
      {children}
    </MessageContext.Provider>
  );
};

export const useMessageApi = () => {
  const context = useContext(MessageContext);
  if (!context)
    throw new Error('useMessageApi must be used within a MessageProvider');
  return context[0];
};
