import React from 'react';
import { Modal } from 'antd';

interface CustomModalProps {
  open: boolean;
  title?: string;
  onOk?: () => void;
  onCancel?: () => void;
  okText?: string;
  cancelText?: string;
  children?: React.ReactNode;
  closable?: boolean;
  width?: number | string;
}
const CustomModal: React.FC<CustomModalProps> = ({
  open,
  title = 'Modal Title',
  onOk,
  onCancel,
  okText = 'OK',
  cancelText = 'Cancel',
  children,
  closable = true,
  width,
}) => {
  return (
    <Modal
      title={title}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      okText={okText}
      cancelText={cancelText}
      closable={closable}
      width={width}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
