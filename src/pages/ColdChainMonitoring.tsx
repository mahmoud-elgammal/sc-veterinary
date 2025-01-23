import { 
  Card, 
  Flex, 
  Heading, 
  Text, 
  Badge, 
  Table, 
  Progress, 
  Button, 
  Grid,
  Box
} from '@radix-ui/themes';
import {
  GlobeIcon,
  BellIcon,
  DrawingPinIcon
} from '@radix-ui/react-icons';
import { LineChart, ReferenceLine, Line } from 'recharts';
import { useTranslation } from 'react-i18next';

const ColdChainMonitoring = () => {
  const { t } = useTranslation('cold-chain-monitoring');
  const shipments = [
    {
      id: 'VC23001',
      product: 'Vaccine Adjuvant',
      currentTemp: 2.8,
      location: 'Warehouse B',
      status: t('in-transit'),
      tempHistory: [
        { time: '00:00', temp: 2.5 },
        { time: '04:00', temp: 2.7 },
        { time: '08:00', temp: 3.1 }
      ]
    }
  ];

  return (
    <Box p="6" className="flex-1">
      <Flex justify="between" align="center" mb="5">
        <Heading size="6">{t('active-cold-chain-monitoring')}</Heading>
        <Flex gap="3">
          <Button variant="soft">
            <DrawingPinIcon /> {t('new-shipment')}
          </Button>
          <Button variant="soft">
            {t('export-compliance-report')}
          </Button>
        </Flex>
      </Flex>

      <Grid columns="3" gap="4" mb="5">
        <Card>
          <Flex direction="column" gap="2">
            <Flex align="center" gap="2">
              <p>{t('thermometer-icon')}</p>
              <Text size="2">{t('current-temperature')}</Text>
            </Flex>
            <Heading size="7">2.8°C</Heading>
            <Badge color="green" variant="soft">{t('within-range')}</Badge>
          </Flex>
        </Card>

        <Card>
          <Flex direction="column" gap="2">
            <Flex align="center" gap="2">
              <GlobeIcon />
              <Text size="2">{t('active-shipments')}</Text>
            </Flex>
            <Heading size="7">24</Heading>
            <Progress value={85} />
          </Flex>
        </Card>

        <Card>
          <Flex direction="column" gap="2">
            <Flex align="center" gap="2">
              <BellIcon />
              <Text size="2">{t('active-alerts')}</Text>
            </Flex>
            <Heading size="7" className="text-red-500">2</Heading>
            <Text size="1">{t('last-24-hours')}</Text>
          </Flex>
        </Card>
      </Grid>

      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>{t('shipment')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('temperature-trend')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('location')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('status')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('actions')}</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {shipments.map((shipment) => (
            <Table.Row key={shipment.id}>
              <Table.Cell>{shipment.id}</Table.Cell>
              <Table.Cell>
                <div className="w-48 h-12">
                  <LineChart width={200} height={50} data={shipment.tempHistory}>
                    <Line 
                      type="monotone" 
                      dataKey="temp" 
                      stroke={shipment.currentTemp > 5 ? "#ef4444" : "#3b82f6"} 
                      dot={false}
                    />
                    <ReferenceLine y={5} stroke="#ef4444" strokeDasharray="3 3" />
                  </LineChart>
                </div>
              </Table.Cell>
              <Table.Cell>{shipment.location}</Table.Cell>
              <Table.Cell>
                <Badge color="green" variant="soft">
                  {shipment.status}
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <Button variant="soft" size="1">{t('view-details')}</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <Flex mt="5" direction="column" gap="3">
        <Heading size="5">{t('geographical-distribution')}</Heading>
        <div className="h-64 bg-gray-100 rounded-lg">
          <Flex justify="center" align="center" height="100%">
            <Text className="text-gray-400">{t('gps-tracking-map')}</Text>
          </Flex>
        </div>
      </Flex>
    </Box>
  );
};

export default ColdChainMonitoring;