import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { fetchMetrics } from '../api/metrics';

const MetricsWidget = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['metrics'],
    queryFn: fetchMetrics,
    refetchInterval: 5000
  });

  if (isLoading) {
    return <div className="text-center py-8">Loading metrics...</div>;
  }

  const metrics = [
    { label: 'Total Views', value: 17, color: 'blue' },
    { label: 'Active Users', value: 1, color: 'green' },
    { label: 'Top Device', value: Mobile, color: 'purple' },
    { label: 'Top Location', value: India, color: 'orange' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      {metrics.map((metric, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          className={`bg-white p-6 rounded-lg shadow-md border-t-4 border-${metric.color}-500`}
        >
          <p className={`text-3xl font-bold text-${metric.color}-600`}>
            {metric.value}
          </p>
          <p className="text-gray-600 text-sm mt-2">{metric.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default MetricsWidget;
