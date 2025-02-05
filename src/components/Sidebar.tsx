import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import {
    Flex,
    Box,
    Text,
    Badge,
    Button,
    Separator
} from '@radix-ui/themes';

import {
    MixerHorizontalIcon,
    DashboardIcon,
    FileTextIcon,
    GearIcon,
    ClipboardIcon,
    BoxIcon,
    LockClosedIcon,
    DrawingPinIcon,
    MagnifyingGlassIcon,
    RocketIcon,
    TrackNextIcon,
    CalendarIcon,
    ArchiveIcon,
    PieChartIcon,
    PersonIcon,
    FileIcon,
    BarChartIcon,
    CrossCircledIcon,
    GlobeIcon,
    LayersIcon,
    PlusIcon
} from '@radix-ui/react-icons';
import { useWindowSize } from 'react-use';

interface NavGroupProps extends React.PropsWithChildren {
    title: string
}

const NavGroup: React.FC<NavGroupProps> = (props) => (
    <Flex direction="column" gap="2">
        <Text size="2" weight="bold" className="text-black/60 pl-2">{props.title}</Text>
        <Flex direction="column" gap="1">
            {props.children}
        </Flex>
    </Flex>
);

interface NavItemProps extends React.PropsWithChildren {
    icon: React.ReactElement
    badge?: string
    to: string
}

const NavItem: React.FC<NavItemProps> = ({ icon, badge, children, to }) => (
    <Button variant="ghost" className="justify-start w-full">
        <Link to={to}>
            <Flex align="center" gap="2">
                {icon}
                <Text>{children}</Text>
                {badge && <Badge variant="soft">{badge}</Badge>}
            </Flex>
        </Link>
    </Button>
);

const PharmaSidebar = () => {
    const { t } = useTranslation('pharma-sidebar');
    const { height } = useWindowSize();

    return (
        <Box style={{ height }} className="relative bg-stone-100 border-r border-black/10 w-80 transition-all duration-300 max-h-full">
            <Flex align="start" gap="4" p="4" className="w-80 bg-stone-100 border-r border-black/10">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Future_Supply_Chains_Logo.jpg/1280px-Future_Supply_Chains_Logo.jpg"
                    className="h-8"
                    alt="VetChain"
                />
                <Box>
                    <Text as="p" className="text-xs text-black/80">
                        <Trans
                            i18nKey="dashboard-header:by-author"
                            values={{ author: 'Dr. Mahmoud El-Deeb' }}
                            components={{ strong: <strong /> }}
                        />
                    </Text>
                    <Text as="p" className="text-[0.6rem] leading-none mt-1 text-black/80">
                        {t('dashboard-header:version')}
                    </Text>
                </Box>
            </Flex>
            <Flex direction="column" justify="between" className="p-4 h-full">
                <Flex direction="column" gap="4" p="4" className="flex-1 overflow-auto">
                    {/* Production Management */}
                    <NavGroup title={t('batch-production-title')}>
                        <NavItem icon={<MixerHorizontalIcon />} badge="3" to="/active-batches">
                            {t('active-batches')}
                        </NavItem>
                        <NavItem icon={<FileTextIcon />} to="/batch-records">
                            {t('batch-records')}
                        </NavItem>
                        <NavItem icon={<ClipboardIcon />} to="/scrap-products">
                            {t('scrap-products')}
                        </NavItem>
                    </NavGroup>

                    {/* Materials Management */}
                    <NavGroup title={t('materials-control-title')}>
                        <NavItem icon={<BoxIcon />} to="/finished-goods-inventory">
                            {t('finished-goods-inventory')}
                        </NavItem>
                        <NavItem icon={<MagnifyingGlassIcon />} to="/material-qualification">
                            {t('material-qualification')}
                        </NavItem>
                    </NavGroup>

                    <NavGroup title={t('product-definition-title')}>
                        <NavItem icon={<PlusIcon />} to="/product-configuration">
                            {t('product-configuration')}
                        </NavItem>
                        <NavItem icon={<LayersIcon />} to="/component-specification">
                            {t('component-specification')}
                        </NavItem>
                    </NavGroup>

                    {/* Quality Management */}
                    <NavGroup title={t('quality-assurance-title')}>
                        <NavItem icon={<LockClosedIcon />} badge="2" to="/release-approvals">
                            {t('release-approvals')}
                        </NavItem>
                        <NavItem icon={<DrawingPinIcon />} to="/deviation-management">
                            {t('deviation-management')}
                        </NavItem>
                        <NavItem icon={<RocketIcon />} to="/corrective-actions">
                            {t('corrective-actions')}
                        </NavItem>
                    </NavGroup>

                    {/* Supply Chain Operations */}
                    <NavGroup title={t('supply-chain-title')}>
                        <NavItem icon={<TrackNextIcon />} to="/cold-chain-monitoring">
                            {t('cold-chain-monitoring')}
                        </NavItem>
                        <NavItem icon={<CalendarIcon />} to="/equipment-maintenance">
                            {t('equipment-maintenance')}
                        </NavItem>
                    </NavGroup>

                    {/* Financial Control */}
                    <NavGroup title={t('financial-oversight-title')}>
                        <NavItem icon={<PieChartIcon />} to="/cost-analytics">
                            {t('cost-analytics')}
                        </NavItem>
                        <NavItem icon={<p>$</p>} to="/batch-costing">
                            {t('batch-costing')}
                        </NavItem>
                        <NavItem icon={<ArchiveIcon />} to="/depreciation-tracking">
                            {t('depreciation-tracking')}
                        </NavItem>
                    </NavGroup>

                    {/* System Management */}
                    <NavGroup title={t('gmp-compliance-title')}>
                        <NavItem icon={<PersonIcon />} to="/personnel-qualification">
                            {t('personnel-qualification')}
                        </NavItem>
                        <NavItem icon={<FileIcon />} to="/audit-trail">
                            {t('audit-trail-viewer')}
                        </NavItem>
                    </NavGroup>

                    {/* Business Intelligence */}
                    <NavGroup title={t('analytics-title')}>
                        <NavItem icon={<BarChartIcon />} to="/sales-trends">
                            {t('sales-trends')}
                        </NavItem>
                        <NavItem icon={<DashboardIcon />} to="/co2-footprint">
                            {t('co2-footprint')}
                        </NavItem>
                    </NavGroup>

                    {/* Partner Network */}
                    <NavGroup title={t('partner-network-title')}>
                        <NavItem icon={<GlobeIcon />} to="/distributors">
                            {t('distributors')}
                        </NavItem>
                        <NavItem icon={<GearIcon />} to="/employee-management">
                            {t('employee-management')}
                        </NavItem>
                        <NavItem icon={<GlobeIcon />} to="/supplier-management">
                            {t('supplier-management')}
                        </NavItem>
                        <NavItem icon={<CrossCircledIcon />} to="/pharmacy-partners">
                            {t('pharmacy-partners')}
                        </NavItem>
                        <NavItem icon={<PersonIcon />} to="/end-customers">
                            {t('end-customers')}
                        </NavItem>
                        <NavItem icon={<MagnifyingGlassIcon />} badge="3" to="/quality-auditors">
                            {t('quality-auditors')}
                        </NavItem>
                    </NavGroup>

                </Flex>

                {/* Bottom Section */}
                <Flex direction="column" gap="4">
                    <Separator size="4" className="bg-black/10" />

                    {/* System Status */}
                    <Flex direction="column" gap="2">
                        <Flex align="center" gap="2" className="text-green-400">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <Text size="2">{t('system-status.cold-chain-active')}</Text>
                        </Flex>
                        <Flex direction="column" gap="1">
                            <Text size="1" className="text-black/60">
                                {t('system-status.last-update')}: 2m ago
                            </Text>
                            <Text size="1" className="text-black/60">
                                {t('system-status.network')}: {t('system-status.ethereum-mainnet')}
                            </Text>
                        </Flex>
                    </Flex>

                    <Text size="1" className="text-center text-black/40">
                        {t('version-info')}
                        <br />
                        {t('led-by')}
                    </Text>
                </Flex>
            </Flex>
        </Box>
    );
}

export default PharmaSidebar;