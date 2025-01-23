import { 
  Card, 
  Flex, 
  Heading, 
  Table, 
  Badge, 
  Button, 
  Grid,
  Text,
  Progress,
  Box
} from '@radix-ui/themes';
import { GlobeIcon } from '@radix-ui/react-icons';
import { useTranslation } from 'react-i18next';

const Distributors = () => {
  const { t } = useTranslation('distributors-page');
  const distributors = [
    {
      id: 'DIST-045',
      name: 'PharmaLogix EU',
      region: 'Europe',
      compliance: 'gdp-certified',
      onTimeDelivery: 98.5,
      licenses: 'active',
      lastAudit: '2023-06-15'
    },
  ];

  return (
    <Box p="6" className="flex-1">
      <Flex justify="between" align="center" mb="5">
        <Heading size="6">{t('main-heading')}</Heading>
        <Flex gap="3">
          <Button variant="soft">
            <GlobeIcon /> {t('actions.add-region')}
          </Button>
          <Button variant="soft">
            {t('actions.compliance-report')}
          </Button>
        </Flex>
      </Flex>

      <Grid columns="4" gap="4" mb="5">
        <Card>
          <Flex direction="column" gap="1">
            <Text size="2">{t('metrics.certified-partners.title')}</Text>
            <Heading size="7">24</Heading>
            <Text size="1" className="text-green-500">
              {t('metrics.certified-partners.compliant-text')}
            </Text>
          </Flex>
        </Card>
        <Card>
          <Flex direction="column" gap="1">
            <Text size="2">{t('metrics.avg-delivery-time.title')}</Text>
            <Heading size="7">2.4 Days</Heading>
          </Flex>
        </Card>
        <Card>
          <Flex direction="column" gap="1">
            <Text size="2">{t('metrics.license-expirations.title')}</Text>
            <Heading size="7" className="text-red-500">3</Heading>
          </Flex>
        </Card>
        <Card>
          <Flex direction="column" gap="1">
            <Text size="2">{t('metrics.gdp-compliance.title')}</Text>
            <Progress value={98} />
          </Flex>
        </Card>
      </Grid>

      <Flex gap="4" mb="5">
        <Card style={{ flex: 1 }}>
          <Heading size="4" mb="3">{t('geo-coverage-title')}</Heading>
          {/* Map container remains unchanged */}
        </Card>
      </Flex>

      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>{t('table-headers.distributor')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('table-headers.region')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('table-headers.compliance')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('table-headers.otd')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('table-headers.licenses')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('table-headers.last-audit')}</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {distributors.map((distributor) => (
            <Table.Row key={distributor.id}>
              <Table.Cell>{distributor.name}</Table.Cell>
              <Table.Cell>{distributor.region}</Table.Cell>
              <Table.Cell>
                <Badge variant="soft" color="green">
                  {t(`compliance-status.${distributor.compliance}`)}
                </Badge>
              </Table.Cell>
              <Table.Cell>{distributor.onTimeDelivery}%</Table.Cell>
              <Table.Cell>
                <Badge color={distributor.licenses === 'active' ? 'green' : 'red'}>
                  {t(`license-status.${distributor.licenses}`)}
                </Badge>
              </Table.Cell>
              <Table.Cell>{distributor.lastAudit}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

export default Distributors;