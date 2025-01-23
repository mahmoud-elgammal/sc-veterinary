import { 
  Table, 
  Badge, 
  Card, 
  Flex, 
  Heading, 
  Text, 
  Button
} from '@radix-ui/themes';
import { BarChart, XAxis, YAxis, Bar } from 'recharts';
import { useTranslation } from 'react-i18next';

const DeviationManagement = () => {
  const { t,  } = useTranslation('deviation-management');
  const { dir } = useTranslation().i18n;

  const deviations = [
    {
      id: 'DEV-0231',
      description: t('temperature-excursion'),
      severity: t('severity-major'),
      rootCause: t('cooling-system-failure'),
      status: t('status-under-investigation'),
      capa: 'CAPA-0045'
    },
  ];

  return (
    <Card>
      <Flex justify="between" align="center" mb="5">
        <Heading size="6">{t('deviation-tracking-system')}</Heading>
        <Button variant="soft">
          {t('new-deviation-button')}
        </Button>
      </Flex>

      <Flex gap="4" mb="5">
        <Card style={{ flex: 1 }}>
          <Flex direction="column" gap="1">
            <Text size="2">{t('open-deviations')}</Text>
            <Heading size="7">{t('active-count', { count: 5 })}</Heading>
          </Flex>
        </Card>
        <Card style={{ flex: 1 }}>
          <Flex direction="column" gap="1">
            <Text size="2">{t('avg-resolution-time')}</Text>
            <Heading size="7">{t('resolution-days', { days: 7.2 })}</Heading>
          </Flex>
        </Card>
      </Flex>

      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>{t('deviation-id')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('description')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('severity')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('root-cause')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('status')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('capa-link')}</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {deviations.map((dev) => (
            <Table.Row key={dev.id}>
              <Table.Cell>{dev.id}</Table.Cell>
              <Table.Cell>{dev.description}</Table.Cell>
              <Table.Cell>
                <Badge 
                  color={
                    dev.severity === t('severity-critical') ? 'red' :
                    dev.severity === t('severity-major') ? 'amber' : 'green'
                  }
                >
                  {dev.severity}
                </Badge>
              </Table.Cell>
              <Table.Cell>{dev.rootCause}</Table.Cell>
              <Table.Cell>
                <Badge 
                  color={
                    dev.status === t('status-closed') ? 'green' :
                    dev.status === t('status-under-investigation') ? 'amber' : 'red'
                  }
                  variant="soft"
                >
                  {dev.status}
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <Button variant="ghost" size="1">
                  {dev.capa}
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <Flex mt="5" direction="column" gap="3">
        <Heading size="5">{t('deviation-trend-analysis')}</Heading>
        <div className="h-64">
          <BarChart
            data={[]}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey={t('month')} />
            <YAxis />
            <Bar dataKey={t('deviations')} fill="#ef4444" />
          </BarChart>
        </div>
      </Flex>
    </Card>
  );
};

export default DeviationManagement;