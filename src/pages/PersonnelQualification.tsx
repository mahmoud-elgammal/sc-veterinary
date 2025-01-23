import { useTranslation } from 'react-i18next';
import { 
  Table, 
  Badge, 
  Card, 
  Flex, 
  Heading, 
  Text, 
  Button,
  Dialog,
  Progress,
  Grid
} from '@radix-ui/themes';
import { 
  PersonIcon,
  IdCardIcon,
  ClockIcon,
  CheckCircledIcon,
  FileTextIcon,
  RocketIcon
} from '@radix-ui/react-icons';
import { PieChart, Pie, Cell } from 'recharts';

const PersonnelQualification = () => {
  const { t } = useTranslation('personnel-qualification-page');
  const employees = [
    {
      id: 'EMP-0451',
      name: 'Dr. Ahmed Sami',
      role: 'quality-auditor-role',
      certifications: 4,
      trainingProgress: 85,
      expiry: '2024-03-15',
      status: 'qualified-status'
    },
  ];

  const complianceData = [
    { name: 'qualified-status', value: 85, color: '#10b981' },
    { name: 'pending-status', value: 10, color: '#f59e0b' },
    { name: 'expired-status', value: 5, color: '#ef4444' },
  ];

  return (
    <Card>
      <Flex justify="between" align="center" mb="5">
        <Heading size="6">{t('gmp-title')}</Heading>
        <Flex gap="3">
          <Button variant="soft">
            <RocketIcon /> {t('new-training-plan-button')}
          </Button>
          <Button variant="soft">
            {t('export-compliance-report-button')}
          </Button>
        </Flex>
      </Flex>

      <Grid columns="3" gap="4" mb="5">
        <Card>
          <Flex direction="column" gap="1">
            <Text size="2">{t('total-qualified-label')}</Text>
            <Heading size="7">142</Heading>
            <Text size="1" className="text-green-500">{t('compliance-percentage')}</Text>
          </Flex>
        </Card>
        <Card>
          <Flex direction="column" gap="1">
            <Text size="2">{t('training-due-label')}</Text>
            <Heading size="7" className="text-amber-500">15</Heading>
          </Flex>
        </Card>
        <Card>
          <Flex direction="column" gap="1">
            <Text size="2">{t('certifications-expiring-label')}</Text>
            <Heading size="7" className="text-red-500">8</Heading>
          </Flex>
        </Card>
      </Grid>

      <Flex gap="4" mb="5">
        <Card style={{ flex: 1 }}>
          <Heading size="4" mb="3">{t('qualification-status-heading')}</Heading>
          <div className="h-64">
            <PieChart width={300} height={250}>
              <Pie
                data={complianceData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {complianceData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </div>
        </Card>
        <Card style={{ flex: 1 }}>
          <Heading size="4" mb="3">{t('training-timeline-heading')}</Heading>
        </Card>
      </Flex>

      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>{t('employee-column')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('role-column')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('certifications-column')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('training-progress-column')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('expiry-date-column')}</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>{t('status-column')}</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employees.map((employee) => (
            <Table.Row key={employee.id}>
              <Table.Cell>
                <Flex align="center" gap="2">
                  <PersonIcon />
                  {employee.name}
                </Flex>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="soft">
                  {t(employee.role)}
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="outline">
                  {employee.certifications} {t('active-label')}
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <Flex align="center" gap="2">
                  <Progress value={employee.trainingProgress} />
                  <Text size="2">{employee.trainingProgress}%</Text>
                </Flex>
              </Table.Cell>
              <Table.Cell>
                <Flex align="center" gap="2">
                  <ClockIcon />
                  {employee.expiry}
                </Flex>
              </Table.Cell>
              <Table.Cell>
                <Badge 
                  color={employee.status === 'qualified-status' ? 'green' : 'red'}
                  variant="soft"
                >
                  {t(employee.status)}
                </Badge>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default PersonnelQualification;