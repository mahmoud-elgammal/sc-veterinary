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
  DropdownMenu,
  Box
} from '@radix-ui/themes';
import { 
  MagnifyingGlassIcon,
  FileTextIcon,
  CalendarIcon,
  CheckCircledIcon,
  CrossCircledIcon,
  PersonIcon,
  LockClosedIcon
} from '@radix-ui/react-icons';
import { useTranslation } from 'react-i18next';

const QualityAuditors = () => {
  const { t } = useTranslation('quality-auditors');
  const auditors = [
    {
      id: 'AUD-04521',
      firm: t('pharma-cert-eu'),
      certifications: [t('eu-gmp'), t('fda'), t('iso-9001')],
      lastAudit: '2023-06-15',
      findings: { critical: 2, major: 5, minor: 12 },
      status: t('active'),
      complianceScore: 98.4,
      nextAudit: '2024-01-15',
      capaStatus: t('in-progress')
    },
  ];

  return (
    <Box p="6" className="flex-1">
      <Flex justify="between" align="center" mb="5">
        <Heading size="6">{t('gmp-auditor-management-system')}</Heading>
        <Flex gap="3">
          <Button variant="soft">
            <LockClosedIcon /> {t('schedule-audit')}
          </Button>
          <Button variant="soft">
            <FileTextIcon /> {t('compliance-report')}
          </Button>
        </Flex>
      </Flex>

      <Grid columns="4" gap="4" mb="5">
        <Card className="bg-green-50">
          <Flex direction="column" gap="1">
            <Text size="2">{t('certified-auditors')}</Text>
            <Heading size="7">24</Heading>
            <Text size="1" className="text-green-600">{t('98-compliant')}</Text>
          </Flex>
        </Card>
        <Card className="bg-amber-50">
          <Flex direction="column" gap="1">
            <Text size="2">{t('open-findings')}</Text>
            <Heading size="7" className="text-amber-600">45</Heading>
            <Text size="1">{t('12-critical')}</Text>
          </Flex>
        </Card>
        <Card className="bg-blue-50">
          <Flex direction="column" gap="1">
            <Text size="2">{t('avg-capa-time')}</Text>
            <Heading size="7">7.2 {t('days')}</Heading>
            <Progress value={65} />
          </Flex>
        </Card>
        <Card className="bg-purple-50">
          <Flex direction="column" gap="1">
            <Text size="2">{t('certifications')}</Text>
            <Heading size="7">{t('98-valid')}</Heading>
            <Text size="1">{t('3-expiring-soon')}</Text>
          </Flex>
        </Card>
      </Grid>

      <Flex gap="4" mb="5">
        <Card style={{ flex: 2 }}>
          <Heading size="4" mb="3" className="flex items-center gap-2">
            <CalendarIcon /> {t('audit-schedule')}
          </Heading>
          <div className="h-96">
            {/* GanttChart component */}
          </div>
        </Card>
        <Card style={{ flex: 1 }}>
          <Heading size="4" mb="3" className="flex items-center gap-2">
            <MagnifyingGlassIcon /> {t('compliance-heatmap')}
          </Heading>
          <div className="grid grid-cols-2 gap-4 h-96 p-4">
            {[t('eu-gmp'), t('fda'), t('iso-13485'), t('who')].map((standard) => (
              <Badge 
                key={standard} 
                variant="soft" 
                className="h-24 flex items-center justify-center text-center"
              >
                <Text weight="bold">{standard}</Text>
                <Text size="1" className="text-green-600">98%</Text>
              </Badge>
            ))}
          </div>
        </Card>
      </Flex>

      <Table.Root variant="surface" className="mt-6">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>{t('audit-firm')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('certifications')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('last-audit')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('findings')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('compliance-score')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('capa-status')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('actions')}</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {auditors.map((auditor) => (
            <Table.Row key={auditor.id}>
              <Table.Cell>
                <Flex align="center" gap="2">
                  <PersonIcon className="text-blue-600" />
                  {auditor.firm}
                </Flex>
              </Table.Cell>
              <Table.Cell>
                <Flex gap="2">
                  {auditor.certifications.map(cert => (
                    <Badge key={cert} variant="outline" color="blue">
                      {cert}
                    </Badge>
                  ))}
                </Flex>
              </Table.Cell>
              <Table.Cell>
                <Flex align="center" gap="2">
                  <CalendarIcon />
                  {auditor.lastAudit}
                </Flex>
              </Table.Cell>
              <Table.Cell>
                <Flex gap="2">
                  <Badge color="red">{auditor.findings.critical} {t('critical')}</Badge>
                  <Badge color="amber">{auditor.findings.major} {t('major')}</Badge>
                  <Badge color="gray">{auditor.findings.minor} {t('minor')}</Badge>
                </Flex>
              </Table.Cell>
              <Table.Cell>
                <Progress value={auditor.complianceScore} />
                <Text size="1">{auditor.complianceScore}%</Text>
              </Table.Cell>
              <Table.Cell>
                <Badge 
                  color={auditor.capaStatus === t('completed') ? 'green' : 'blue'}
                  variant="soft"
                >
                  {auditor.capaStatus}
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <Button variant="ghost">{t('actions')}</Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content>
                    <DropdownMenu.Item>
                      <FileTextIcon /> {t('audit-report')}
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                      <CheckCircledIcon /> {t('approve-capa')}
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                      <CrossCircledIcon /> {t('raise-finding')}
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <Flex mt="5" direction="column" gap="3">
        <Heading size="4">{t('audit-timeline')}</Heading>
        {/* Timeline component */}
      </Flex>

      <Flex mt="5" justify="between" className="bg-gray-50 p-4 rounded-lg">
        <Text size="1" className="text-gray-500">
          <LockClosedIcon /> {t('21-cfr-compliant')}
        </Text>
        <Text size="1" className="text-gray-500">
          {t('valid-until')} 2024-12-31 | ES: AUD/2023/04521
        </Text>
      </Flex>
    </Box>
  );
};

export default QualityAuditors;