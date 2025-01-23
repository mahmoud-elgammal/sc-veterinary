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
import { useTranslation } from 'react-i18next';

const CMOs = () => {
  const { t } = useTranslation('cmo-oversight');
  const cmos = [
    {
      id: 'CMO-789',
      name: 'BioPharm Solutions',
      capability: 'Sterile Injectables',
      compliance: 'EU GMP',
      capacity: '85%',
      auditScore: 98,
      batches: 'VC23001, VC23002'
    },
  ];

  return (
    <Box p="6" className="flex-1">
      <Flex justify="between" align="center" mb="5">
        <Heading size="6">{t('contract-manufacturing-oversight')}</Heading>
        <Flex gap="3">
          <Button variant="soft">
            {t('capacity-planner')}
          </Button>
          <Button variant="soft">
            {t('quality-dashboard')}
          </Button>
        </Flex>
      </Flex>

      <Grid columns="4" gap="4" mb="5">
        <Card>
          <Flex direction="column" gap="1">
            <Text size="2">{t('approved-cmos')}</Text>
            <Heading size="7">15</Heading>
          </Flex>
        </Card>
        <Card>
          <Flex direction="column" gap="1">
            <Text size="2">{t('avg-audit-score')}</Text>
            <Heading size="7">96.4</Heading>
          </Flex>
        </Card>
        <Card>
          <Flex direction="column" gap="1">
            <Text size="2">{t('active-batches')}</Text>
            <Heading size="7">45</Heading>
          </Flex>
        </Card>
        <Card>
          <Flex direction="column" gap="1">
            <Text size="2">{t('yield-variance')}</Text>
            <Heading size="7" className="text-red-500">+2.1%</Heading>
          </Flex>
        </Card>
      </Grid>

      <Flex gap="4" mb="5">
        <Card style={{ flex: 1 }}>
          <Heading size="4" mb="3">{t('production-schedule')}</Heading>
          {/* <div className="h-64">
            <GanttChart />
          </div> */}
        </Card>
        <Card style={{ flex: 1 }}>
          <Heading size="4" mb="3">{t('compliance-matrix')}</Heading>
          <div className="h-64 grid grid-cols-2 gap-4">
            {['EU GMP', 'FDA', 'WHO', 'ISO 13485'].map((standard) => (
              <Badge key={standard} variant="soft" color="green">
                {t('certified-label', { standard })}
              </Badge>
            ))}
          </div>
        </Card>
      </Flex>

      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>{t('cmo')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('capabilities')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('compliance')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('capacity')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('audit-score')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('active-batches')}</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {cmos.map((cmo) => (
            <Table.Row key={cmo.id}>
              <Table.Cell>{cmo.name}</Table.Cell>
              <Table.Cell>{cmo.capability}</Table.Cell>
              <Table.Cell>
                <Badge variant="soft" color="green">
                  {cmo.compliance}
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <Progress value={parseInt(cmo.capacity)} />
              </Table.Cell>
              <Table.Cell>{cmo.auditScore}/100</Table.Cell>
              <Table.Cell>{cmo.batches}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

export default CMOs;