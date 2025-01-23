import { 
  Card, 
  Flex, 
  Heading, 
  Text, 
  Table, 
  Badge, 
  Button, 
  Grid
} from '@radix-ui/themes';
import { PieChart, Pie, LineChart, Line } from 'recharts';
import { useTranslation } from 'react-i18next';

const DepreciationTracking = () => {
  const { t } = useTranslation('depreciation-tracking');
  const assets = [
    {
      id: 'AST-04587',
      name: 'Lyophilizer L-245',
      category: t('production'),
      acquisitionCost: 450000,
      currentValue: 320000,
      method: 'Straight-line',
      lifespan: '10 Years'
    },
  ];

  return (
    <Card>
      <Flex justify="between" align="center" mb="5">
        <Heading size="6">{t('capex-depreciation-schedule')}</Heading>
        <Flex gap="3">
          <Button variant="soft">
            {t('add-asset')}
          </Button>
          <Button variant="soft">
            {t('tax-report')}
          </Button>
        </Flex>
      </Flex>

      <Grid columns="3" gap="4" mb="5">
        <Card>
          <Flex direction="column" gap="1">
            <Text size="2">{t('total-capex')}</Text>
            <Heading size="7">$4.5M</Heading>
          </Flex>
        </Card>
        <Card>
          <Flex direction="column" gap="1">
            <Text size="2">{t('accumulated-depreciation')}</Text>
            <Heading size="7">$1.2M</Heading>
          </Flex>
        </Card>
        <Card>
          <Flex direction="column" gap="1">
            <Text size="2">{t('net-book-value')}</Text>
            <Heading size="7">$3.3M</Heading>
          </Flex>
        </Card>
      </Grid>

      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>{t('asset-id')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('equipment')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('category')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('acquisition-cost')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('current-value')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('depreciation-method')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('remaining-life')}</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {assets.map((asset) => (
            <Table.Row key={asset.id}>
              <Table.Cell>{asset.id}</Table.Cell>
              <Table.Cell>{asset.name}</Table.Cell>
              <Table.Cell>
                <Badge variant="soft">
                  {asset.category}
                </Badge>
              </Table.Cell>
              <Table.Cell>${asset.acquisitionCost.toLocaleString()}</Table.Cell>
              <Table.Cell>${asset.currentValue.toLocaleString()}</Table.Cell>
              <Table.Cell>{asset.method}</Table.Cell>
              <Table.Cell>{asset.lifespan}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <Flex mt="5" gap="4">
        <Card style={{ flex: 1 }}>
          <Heading size="4" mb="3">{t('depreciation-schedule')}</Heading>
          <div className="h-64">
            <LineChart width={500} height={300} data={assets}>
              <Line type="monotone" dataKey="currentValue" stroke="#3b82f6" />
            </LineChart>
          </div>
        </Card>
        <Card style={{ flex: 1 }}>
          <Heading size="4" mb="3">{t('asset-distribution')}</Heading>
          <div className="h-64">
            <PieChart width={300} height={250}>
              <Pie
                data={[
                  { name: t('production'), value: 65 },
                  { name: t('lab'), value: 25 },
                  { name: t('it'), value: 10 }
                ]}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              />
            </PieChart>
          </div>
        </Card>
      </Flex>
    </Card>
  );
};

export default DepreciationTracking;