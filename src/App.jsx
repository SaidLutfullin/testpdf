
import './App.css'
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
    ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject} from '@syncfusion/ej2-react-pdfviewer';



function App() {
    // const apiUrl = 'http://localhost:5173/'
    const apiUrl = 'https://testpdf-inky.vercel.app/'
  return (
      <div styles={{magrinTop: '1rem' }}>
          <div className='control-section'>
              {/* Render the PDF Viewer */}
              <PdfViewerComponent
                  id="container"
                  documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                  // serviceUrl="https://services.syncfusion.com/react/production/api/pdfviewer"
                  resourceUrl={`${apiUrl || 'http://5.35.91.52:3000/'}/ej2-pdfviewer-lib`}
                  style={{ 'height': '640px' }}>

                  <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]}/>
              </PdfViewerComponent>
          </div>
      </div>
  )
}

export default App
