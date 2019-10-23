# httpserver
Un repositorio simple para servir y recibir archivos a traves de GET y PUT

# Upload a file to the server
curl -v -XPUT http://server:port/uploads/file.txt --data-binary @file.txt -H "Content-Type: application/octet-stream"
