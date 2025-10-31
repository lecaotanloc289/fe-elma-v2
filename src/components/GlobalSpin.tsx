import { Spin } from 'antd';
import { useLoadingStore } from '@/store/loading.store';

export default function GlobalSpin() {
  const isLoading = useLoadingStore(state => state.isLoading);

  return <Spin spinning={isLoading} fullscreen tip="Loading..." size="large" />;
}
