import { OPERATORS } from '@/lib/mock';
import { Operator } from '@/lib/types';
import OperatorHero from '@/components/operator/OperatorHero';
import VehicleList from '@/components/vehicle/VehicleList';
import ServiceBlock from '@/components/service/ServiceBlock';
import ServiceCardV2 from '@/components/service/ServiceCardV2';
import PriceTable from '@/components/service/PriceTable';
import FloatingCTA from '@/components/operator/FloatingCTA';
import HideHeaderFooter from '@/components/operator/HideHeaderFooter';
import OperatorBreadcrumb from '@/components/Common/OperatorBreadcrumb';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

async function getOperator(slug: string): Promise<Operator | undefined> {
  return OPERATORS.find((o) => o.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const operator = await getOperator(slug);

  if (!operator) {
    return {
      title: 'Không tìm thấy nhà xe',
      description: 'Nhà xe không tồn tại hoặc đã bị xóa.'
    };
  }

  const title = `${operator.name} – Xe dịch vụ miền Trung`;
  const description = operator.shortDesc || 
    `Dịch vụ xe ${operator.regions.join(', ')} - ${operator.serviceCategories.join(', ')}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: operator.cover 
        ? [{ url: operator.cover }]
        : operator.logo 
          ? [{ url: operator.logo }]
          : []
    }
  };
}

export default async function OperatorPage({ params }: Props) {
  const { slug } = await params;
  const operator = await getOperator(slug);

  if (!operator) {
    notFound();
  }

  // Build vehicles map for quick lookup
  const vehiclesMap = new Map(operator.vehicles.map((v) => [v.id, v]));

  // Group services by type
  const byType = (type: string) => operator.services.filter((s) => s.type === type);

  // Group services separately
  const baoXeServices = operator.services.filter(s => s.type === 'bao-xe');
  const sanBayServices = operator.services.filter(s => s.type === 'san-bay');
  const eventServices = operator.services.filter(s => s.type === 'su-kien');
  const tourServices = operator.services.filter(s => s.type === 'tour-rieng');

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-dark relative">
      <HideHeaderFooter />
      {/* Floating CTA */}
      <FloatingCTA contacts={operator.contacts} />
      
      {/* Breadcrumb */}
      <OperatorBreadcrumb operatorName={operator.name} />

      {/* Operator Hero Section */}
      <OperatorHero
        name={operator.name}
        verified={operator.verified}
        shortDesc={operator.shortDesc}
        regions={operator.regions}
        serviceCategories={operator.serviceCategories}
        contacts={operator.contacts}
        logo={operator.logo}
        cover={operator.cover}
      />

      {/* Services Section */}
      <section className="py-8 md:py-12 bg-white dark:bg-gray-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Dịch vụ
            </h2>
            <p className="text-gray-600 dark:text-body-color-dark">
              Các gói dịch vụ của {operator.name}
            </p>
          </div>
          
          <div className="space-y-8 md:space-y-10">
            {/* Bao xe - Dịch vụ du lịch */}
            {baoXeServices.length > 0 && (
              <div id="section-bao-xe" className="scroll-mt-20">
                <PriceTable
                  title="Dịch vụ du lịch"
                  subtitle={`${baoXeServices.length} tuyến có sẵn`}
                  services={baoXeServices}
                  headerGradient="bg-gradient-to-r from-blue-500 to-purple-600"
                  priceColor="text-blue-600"
                />
              </div>
            )}

            {/* Sân bay - Đưa đón sân bay */}
            {sanBayServices.length > 0 && (
              <div id="section-san-bay" className="scroll-mt-20">
                <PriceTable
                  title="Đưa đón sân bay"
                  subtitle={`${sanBayServices.length} tuyến có sẵn`}
                  services={sanBayServices}
                  headerGradient="bg-gradient-to-r from-green-500 to-teal-600"
                  priceColor="text-green-600"
                />
              </div>
            )}

            {/* Sự kiện VIP (New Card Design) */}
            {eventServices.length > 0 && (
              <div id="section-su-kien" className="space-y-6 scroll-mt-20">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Dịch vụ cưới hỏi / VIP
                  </h3>
                  <p className="text-gray-600 dark:text-body-color-dark">
                    {eventServices.length} gói lựa chọn
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {eventServices.map((service) => (
                    <ServiceCardV2
                      key={service.id}
                      service={service}
                      vehiclesMap={vehiclesMap}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Tour riêng (if any) */}
            {tourServices.length > 0 && (
              <div id="section-tour-rieng" className="space-y-6 scroll-mt-20">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Tour riêng
                  </h3>
                  <p className="text-gray-600 dark:text-body-color-dark">
                    {tourServices.length} tour{tourServices.length > 1 ? 's có sẵn' : ''}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tourServices.map((service) => (
                    <ServiceBlock
                      key={service.id}
                      service={service}
                      vehiclesMap={vehiclesMap}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Vehicle List Section */}
      <section className="py-8 md:py-12 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Danh sách xe
            </h2>
            <p className="text-gray-600 dark:text-body-color-dark">
              Các loại xe có sẵn của {operator.name}
            </p>
          </div>
          <VehicleList 
            vehicles={operator.vehicles} 
            showFilter={operator.showVehicleFilter ?? true}
          />
        </div>
      </section>

      {/* Footer CTA (repeated) */}
      <section className="py-8 md:py-12 bg-white dark:bg-gray-dark border-t border-gray-200 dark:border-stroke-dark">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-3 md:space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              Liên hệ ngay để được tư vấn miễn phí
            </h3>
            <p className="text-gray-600 dark:text-body-color-dark">
              Hotline: {operator.contacts.phone || 'N/A'}
            </p>
            {operator.contacts.zalo && (
              <p className="text-sm text-gray-500 dark:text-body-color-dark">
                Hoặc chat Zalo: {operator.contacts.zalo.split('/').pop()}
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

