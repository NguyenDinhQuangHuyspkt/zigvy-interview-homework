import React from 'react';
import { Modal, Form, Input, Select } from 'antd';
import { TaskStatus } from '../../../components/task/type';

const { TextArea } = Input;

export interface ICreateTaskModalProps {
  visible: boolean;
  onCreate: (values: { title: string; description: string; status: TaskStatus,dueDate: string }) => void;
  onCancel: () => void;
}

const statusOptions = [
  TaskStatus.TODO,
  TaskStatus.INPROGRESS,
  TaskStatus.DONE,
];

const ModalCreateTask: React.FC<ICreateTaskModalProps> = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields()
      .then((values) => {
        form.resetFields();
        onCreate(values);
      })
      .catch((info) => {
        console.log('Validation Failed:', info);
      });
  };

  return (
    <Modal
      title="Tạo Task Mới"
      visible={visible}
      onOk={handleOk}
      onCancel={() => {
        form.resetFields();
        onCancel();
      }}
      okText="Tạo"
      cancelText="Hủy"
    >
      <Form
        form={form}
        layout="vertical"
        name="create_task_form"
        initialValues={{ status: 'todo' }}
      >
        <Form.Item
          name="title"
          label="Tiêu đề"
          rules={[{ required: true, message: 'Vui lòng nhập tiêu đề!' }]}
        >
          <Input placeholder="Nhập tiêu đề task" />
        </Form.Item>

        <Form.Item
          name="description"
          label="Mô tả"
        >
          <TextArea rows={3} placeholder="Mô tả chi tiết" />
        </Form.Item>

        <Form.Item
          name="dueDate"
          label="Ngày hết hạn"
          rules={[{ required: true, message: 'Vui lòng chọn ngày hết hạn!' }]}
        >
          <Input type="date" />
        </Form.Item>

        <Form.Item
          name="status"
          label="Trạng thái"
          rules={[{ required: true, message: 'Vui lòng chọn trạng thái!' }]}
        >
          <Select>
            {statusOptions.map((status) => (
              <Select.Option key={status} value={status}>
                {status}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalCreateTask;