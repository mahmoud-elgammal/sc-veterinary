import { 
  Table, 
  Badge, 
  Button, 
  Flex, 
  Heading,
  Card,
  Text
} from '@radix-ui/themes';
import { useTranslation } from 'react-i18next';

const CorrectiveActions = () => {
  const { t } = useTranslation('corrective-actions');
  const capas = [
    {
      id: 'CAPA-0045',
      description: 'Implement preventive maintenance schedule',
      dueDate: '2023-09-01',
      status: 'in-progress',
      effectiveness: 'pending',
      relatedDeviation: 'DEV-0231'
    },
  ];

  return (
    <Card>
      <Flex justify="between" align="center" mb="5">
        <Heading size="6">{t('page-title')}</Heading>
        <Button variant="soft">
          {t('initiate-capa')}
        </Button>
      </Flex>

      <Flex gap="4" mb="5">
        <Card style={{ flex: 1 }}>
          <Flex direction="column" gap="1">
            <Text size="2">{t('overdue-actions')}</Text>
            <Heading size="7" className="text-red-500">2</Heading>
          </Flex>
        </Card>
        <Card style={{ flex: 1 }}>
          <Flex direction="column" gap="1">
            <Text size="2">{t('effectiveness-rate')}</Text>
            <Heading size="7">92%</Heading>
          </Flex>
        </Card>
      </Flex>

      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>{t('table-headers.capa-id')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('table-headers.action')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('table-headers.due-date')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('table-headers.status')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('table-headers.effectiveness')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('table-headers.linked-deviation')}</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {capas.map((capa) => (
            <Table.Row key={capa.id}>
              <Table.Cell>{capa.id}</Table.Cell>
              <Table.Cell>{capa.description}</Table.Cell>
              <Table.Cell>{capa.dueDate}</Table.Cell>
              <Table.Cell>
                <Badge 
                  color={
                    capa.status === 'completed' ? 'green' :
                    capa.status === 'in-progress' ? 'amber' : 'red'
                  }
                  variant="soft"
                >
                  {t(`statuses.${capa.status}`)}
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <Badge 
                  color={
                    capa.effectiveness === 'effective' ? 'green' :
                    capa.effectiveness === 'pending' ? 'amber' : 'red'
                  }
                >
                  {t(`effectiveness-statuses.${capa.effectiveness}`)}
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <Button variant="ghost" size="1">
                  {capa.relatedDeviation}
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default CorrectiveActions;