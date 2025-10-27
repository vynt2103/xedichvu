import { OPERATORS } from '@/lib/mock';
import { Operator } from '@/lib/types';
import OperatorHero from '@/components/operator/OperatorHero';
import VehicleList from '@/components/vehicle/VehicleList';
import ServiceBlock from '@/components/service/ServiceBlock';
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
              <div className="space-y-3 md:space-y-4">
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Dịch vụ du lịch
                  </h3>
                  <p className="text-gray-600 dark:text-body-color-dark">
                    {baoXeServices.length} tuyến có sẵn
                  </p>
                </div>

                {/* Simple Price Table - Mobile optimized */}
                <div className="bg-white dark:bg-[#2C303B] rounded-2xl border border-gray-200 dark:border-stroke-dark overflow-hidden shadow-lg">
                  {/* Desktop Table */}
                  <div className="hidden md:block overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                        <tr>
                          <th className="px-6 py-4 text-left font-bold text-base">Tuyến đường</th>
                          <th className="px-6 py-4 text-left font-bold text-base">Giá</th>
                        </tr>
                      </thead>
                      <tbody>
                        {baoXeServices.map((service) => (
                          service.options.map((option, optIdx) => (
                            <tr key={`${service.id}-${optIdx}`} className="border-b border-gray-200 dark:border-stroke-dark hover:bg-gray-50 dark:hover:bg-[#1D2430] transition-colors">
                              <td className="px-6 py-4">
                                <div className="font-semibold text-base text-gray-900 dark:text-white">
                                  {service.region || service.title}
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="font-bold text-xl text-blue-600">
                                  {typeof option.price === 'number' 
                                    ? option.price.toLocaleString('vi-VN') 
                                    : option.price}
                                  <span className="text-sm text-gray-600 dark:text-body-color-dark ml-1">
                                    /chuyến
                                  </span>
                                </div>
                                {option.note && (
                                  <div className="text-xs text-gray-600 dark:text-body-color-dark mt-1">
                                    {option.note}
                                  </div>
                                )}
                              </td>
                            </tr>
                          ))
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Cards */}
                  <div className="md:hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3">
                      <h4 className="text-white font-bold text-base">Bảng giá</h4>
                    </div>
                    <div className="divide-y divide-gray-200 dark:divide-stroke-dark">
                      {baoXeServices.map((service) => (
                        service.options.map((option, optIdx) => (
                          <div key={`${service.id}-${optIdx}`} className="p-4">
                            <div className="font-bold text-base text-gray-900 dark:text-white mb-2">
                              {service.region || service.title}
                            </div>
                            <div className="font-bold text-lg text-blue-600 mb-1">
                              {typeof option.price === 'number' 
                                ? option.price.toLocaleString('vi-VN') 
                                : option.price}
                              <span className="text-sm text-gray-600 dark:text-body-color-dark ml-1">
                                /chuyến
                              </span>
                            </div>
                            {option.note && (
                              <div className="text-sm text-gray-600 dark:text-body-color-dark">
                                {option.note}
                              </div>
                            )}
                          </div>
                        ))
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Sân bay - Đưa đón sân bay */}
            {sanBayServices.length > 0 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Đưa đón sân bay
                  </h3>
                  <p className="text-gray-600 dark:text-body-color-dark">
                    {sanBayServices.length} tuyến có sẵn
                  </p>
                </div>

                {/* Simple Price Table - Mobile optimized */}
                <div className="bg-white dark:bg-[#2C303B] rounded-2xl border border-gray-200 dark:border-stroke-dark overflow-hidden shadow-lg">
                  {/* Desktop Table */}
                  <div className="hidden md:block overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-green-500 to-teal-600 text-white">
                        <tr>
                          <th className="px-6 py-4 text-left font-bold text-base">Tuyến đường</th>
                          <th className="px-6 py-4 text-left font-bold text-base">Giá</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sanBayServices.map((service) => (
                          service.options.map((option, optIdx) => (
                            <tr key={`${service.id}-${optIdx}`} className="border-b border-gray-200 dark:border-stroke-dark hover:bg-gray-50 dark:hover:bg-[#1D2430] transition-colors">
                              <td className="px-6 py-4">
                                <div className="font-semibold text-base text-gray-900 dark:text-white">
                                  {service.region || service.title}
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="font-bold text-xl text-green-600">
                                  {typeof option.price === 'number' 
                                    ? option.price.toLocaleString('vi-VN') 
                                    : option.price}
                                  <span className="text-sm text-gray-600 dark:text-body-color-dark ml-1">
                                    /chuyến
                                  </span>
                                </div>
                                {option.note && (
                                  <div className="text-xs text-gray-600 dark:text-body-color-dark mt-1">
                                    {option.note}
                                  </div>
                                )}
                              </td>
                            </tr>
                          ))
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Cards */}
                  <div className="md:hidden">
                    <div className="bg-gradient-to-r from-green-500 to-teal-600 px-4 py-3">
                      <h4 className="text-white font-bold text-base">Bảng giá</h4>
                    </div>
                    <div className="divide-y divide-gray-200 dark:divide-stroke-dark">
                      {sanBayServices.map((service) => (
                        service.options.map((option, optIdx) => (
                          <div key={`${service.id}-${optIdx}`} className="p-4">
                            <div className="font-bold text-base text-gray-900 dark:text-white mb-2">
                              {service.region || service.title}
                            </div>
                            <div className="font-bold text-lg text-green-600 mb-1">
                              {typeof option.price === 'number' 
                                ? option.price.toLocaleString('vi-VN') 
                                : option.price}
                              <span className="text-sm text-gray-600 dark:text-body-color-dark ml-1">
                                /chuyến
                              </span>
                            </div>
                            {option.note && (
                              <div className="text-sm text-gray-600 dark:text-body-color-dark">
                                {option.note}
                              </div>
                            )}
                          </div>
                        ))
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Sự kiện VIP (Card format with image) */}
            {eventServices.length > 0 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Dịch vụ cưới hỏi / VIP
                  </h3>
                  <p className="text-gray-600 dark:text-body-color-dark">
                    {eventServices.length} dịch vụ{eventServices.length > 1 ? ' có sẵn' : ''}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {eventServices.map((service) => (
                    <ServiceBlock
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
              <div className="space-y-6">
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

