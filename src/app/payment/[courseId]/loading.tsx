export default function LoadingPayment() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-gray-50 p-8">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="mt-8 border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="animate-pulse">
                <div className="flex justify-between mb-8">
                  <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                </div>
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i}>
                      <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                      <div className="h-10 bg-gray-200 rounded w-full"></div>
                    </div>
                  ))}
                  <div className="h-12 bg-gray-200 rounded w-full mt-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 