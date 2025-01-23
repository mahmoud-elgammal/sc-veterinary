import { useTranslation } from 'react-i18next';
import { 
    Card, 
    Flex, 
    Heading, 
    Table, 
    Badge, 
    Button, 
    Grid,
    Text
} from '@radix-ui/themes';
import { LineChart, Line, PieChart, Pie } from 'recharts';

const EndCustomers = () => {
  const { t } = useTranslation('end-customers');
  const customers = [
    {
      id: 'PAT-04578',
      therapy: 'Antiparasitic Treatment',
      adherence: 92,
      outcomes: 'positive',
      feedback: 4.7,
      lastOrder: '2023-07-01'
    },
  ];

  return (
    <Card>
      <Flex justify="between" align="center" mb="5">
        <Heading size="6">{t('patient-therapy-management')}</Heading>
        <Flex gap="3">
          <Button variant="soft">
            {t('safety-reporting')}
          </Button>
          <Button variant="soft">
            {t('gdpr-compliance')}
          </Button>
        </Flex>
      </Flex>

      <Grid columns="4" gap="4" mb="5">
        <Card>
          <Flex direction="column" gap="1">
            <Text size="2">{t('active-patients')}</Text>
            <Heading size="7">24,589</Heading>
          </Flex>
        </Card>
        <Card>
          <Flex direction="column" gap="1">
            <Text size="2">{t('avg-adherence')}</Text>
            <Heading size="7">89%</Heading>
          </Flex>
        </Card>
        <Card>
          <Flex direction="column" gap="1">
            <Text size="2">{t('ae-reports')}</Text>
            <Heading size="7" className="text-red-500">45</Heading>
          </Flex>
        </Card>
        <Card>
          <Flex direction="column" gap="1">
            <Text size="2">{t('satisfaction')}</Text>
            <Heading size="7">4.6/5</Heading>
          </Flex>
        </Card>
      </Grid>

      <Flex gap="4" mb="5">
        <Card style={{ flex: 1 }}>
          <Heading size="4" mb="3">{t('therapy-adherence')}</Heading>
          <div className="h-64">
            <LineChart width={800} height={250} data={[]}>
              <Line type="monotone" dataKey="adherence" stroke="#3b82f6" />
            </LineChart>
          </div>
        </Card>
        <Card style={{ flex: 1 }}>
          <Heading size="4" mb="3">{t('demographics')}</Heading>
          <div className="h-64">
            <PieChart width={300} height={250}>
              <Pie
                data={[
                  { name: t('age-18-30'), value: 25 },
                  { name: t('age-31-50'), value: 45 },
                  { name: t('age-51-plus'), value: 30 }
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

      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>{t('patient-id')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('therapy')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('adherence')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('outcomes')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('feedback')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('last-order')}</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {customers.map((customer) => (
            <Table.Row key={customer.id}>
              <Table.Cell>{customer.id}</Table.Cell>
              <Table.Cell>{customer.therapy}</Table.Cell>
              <Table.Cell>{customer.adherence}%</Table.Cell>
              <Table.Cell>
                <Badge variant="soft" color={customer.outcomes === 'positive' ? 'green' : 'red'}>
                  {t(customer.outcomes)}
                </Badge>
              </Table.Cell>
              <Table.Cell>{customer.feedback}/5</Table.Cell>
              <Table.Cell>{customer.lastOrder}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default EndCustomers;