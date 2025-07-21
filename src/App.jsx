
import './App.css'
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
    ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject} from '@syncfusion/ej2-react-pdfviewer';



function App() {

  return (
      <div style={{magrinTop: '1rem' }}>
          <div className='control-section'>
              {/* Render the PDF Viewer */}
              <PdfViewerComponent
                  id="container"
                  documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                  serviceUrl="https://services.syncfusion.com/react/production/api/pdfviewer"
                  style={{ 'height': '640px' }}>

                  <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]}/>
              </PdfViewerComponent>
          </div>
      </div>
  )
}

export default App
