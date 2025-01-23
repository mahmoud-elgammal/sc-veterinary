import { 
  Card, 
  Flex, 
  Heading, 
  Text, 
  Badge, 
  Table, 
  Button, 
  Grid
} from '@radix-ui/themes';
import { MixerHorizontalIcon } from '@radix-ui/react-icons';
import { useTranslation } from 'react-i18next';

const EquipmentMaintenance = () => {
  const { t } = useTranslation('equipment-maintenance');
  
  const equipment = [
    {
      id: 'EQ04587',
      name: 'Lyophilizer L-245',
      type: t('critical'),
      lastService: '2023-07-01',
      status: t('operational'),
      maintenanceDue: t('30-days')
    },
  ];

  return (
    <Card>
      <Flex justify="between" align="center" mb="5">
        <Heading size="6">{t('equipment-maintenance-register')}</Heading>
        <Flex gap="3">
          <Button variant="soft">
            <MixerHorizontalIcon /> {t('new-work-order')}
          </Button>
          <Button variant="soft">
            {t('calibration-schedule')}
          </Button>
        </Flex>
      </Flex>

      <Grid columns="3" gap="4" mb="5">
        <Card>
          <Flex direction="column" gap="1">
            <Text size="2">{t('critical-equipment')}</Text>
            <Heading size="7">45</Heading>
          </Flex>
        </Card>
        <Card>
          <Flex direction="column" gap="1">
            <Text size="2">{t('overdue-maintenance')}</Text>
            <Heading size="7" className="text-red-500">3</Heading>
          </Flex>
        </Card>
        <Card>
          <Flex direction="column" gap="1">
            <Text size="2">{t('calibration-compliance')}</Text>
            <Heading size="7">100%</Heading>
          </Flex>
        </Card>
      </Grid>

      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>{t('equipment-id')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('name')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('criticality')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('last-service')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('status')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('next-due')}</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {equipment.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>
                <Badge color={item.type === t('critical') ? 'red' : 'amber'} variant="soft">
                  {item.type}
                </Badge>
              </Table.Cell>
              <Table.Cell>{item.lastService}</Table.Cell>
              <Table.Cell>
                <Badge color={item.status === t('operational') ? 'green' : 'red'}>
                  {item.status}
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="outline">
                  {item.maintenanceDue}
                </Badge>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default EquipmentMaintenance;