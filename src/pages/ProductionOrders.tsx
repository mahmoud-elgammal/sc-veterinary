import { 
  Table, 
  Badge, 
  Button, 
  Flex, 
  Heading, 
  Select,
  TextField,
  Box,
  Progress
} from '@radix-ui/themes';
import { useTranslation } from 'react-i18next';
import { ClipboardIcon } from '@radix-ui/react-icons';
import { BarChart, XAxis, YAxis, Bar } from 'recharts';

const ProductionOrders = () => {
  const { t } = useTranslation('production-orders');
  const orders = [
    {
      id: 'PO23045',
      product: t('product-names.vaccine-adjuvant'),
      priority: 'High',
      materials: 'Allocated',
      progress: 40,
      schedule: '2023-08-01'
    },
  ];

  return (
    <Box p="6" className="flex-1">
      <Flex justify="between" align="center" mb="5">
        <Heading size="6">{t('page-title')}</Heading>
        <Button variant="soft">
          <ClipboardIcon /> {t('new-order-button')}
        </Button>
      </Flex>

      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>{t('table-headers.order-id')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('table-headers.product')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('table-headers.priority')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('table-headers.materials')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('table-headers.progress')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('table-headers.schedule')}</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {orders.map((order) => (
            <Table.Row key={order.id}>
              <Table.Cell>{order.id}</Table.Cell>
              <Table.Cell>{order.product}</Table.Cell>
              <Table.Cell>
                <Badge 
                  color={
                    order.priority === 'High' ? 'red' :
                    order.priority === 'Medium' ? 'amber' : 'green'
                  }
                  variant="soft"
                >
                  {t(`status.priority.${order.priority.toLowerCase()}`)}
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <Badge color={order.materials === 'Allocated' ? 'green' : 'red'}>
                  {t(`status.materials.${order.materials.toLowerCase()}`)}
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <Flex align="center" gap="2">
                  <Progress value={order.progress} />
                </Flex>
              </Table.Cell>
              <Table.Cell>{order.schedule}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <Flex mt="6" direction="column" gap="4">
        <Heading size="5">{t('chart-title')}</Heading>
        <div className="h-64">
          <BarChart
            layout="vertical"
            data={orders}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis type="number" hide />
            <YAxis dataKey="product" type="category" />
            <Bar dataKey="progress" fill="#3b82f6" />
          </BarChart>
        </div>
      </Flex>
    </Box>
  );
};

export default ProductionOrders;