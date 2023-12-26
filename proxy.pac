function FindProxyForURL(url, host)
{
    if (isInNet(host, "127.0.0.1", "255.255.255.255"))
    {
        return "DIRECT";
    }
    if (url.substring(0, 5) == "http:80.249.112.162:80" ||
	  url.substring(0, 6) == "https:" )
    {
	return "PROXY auth-proxy.unipd.it:8080 ; DIRECT";

    }  
    else
    {
	return "DIRECT";
    }
}
