
/* var pdfData = atob(
    'JVBERi0xLjQKJeLjz9MKMSAwIG9iago8PC9UeXBlL0ZvbnQvU3VidHlwZS9UeXBlMS9CYXNlRm9udC9IZWx2ZXRpY2EvRW5jb2RpbmcvV2luQW5zaUVuY29kaW5nPj4KZW5kb2JqCjIgMCBvYmoKPDwvUHJvZHVjZXIoaVRleHRTaGFycJIgNS41LjEzIKkyMDAwLTIwMTggaVRleHQgR3JvdXAgTlYgXChBR1BMLXZlcnNpb25cKTsgbW9kaWZpZWQgdXNpbmcgaVRleHRTaGFycJIgNS41LjEzIKkyMDAwLTIwMTggaVRleHQgR3JvdXAgTlYgXChBR1BMLXZlcnNpb25cKSkvQ3JlYXRpb25EYXRlKEQ6MjAxOTA0MTExNDQzNDcrMDAnMDAnKS9Nb2REYXRlKEQ6MjAxOTA0MTExNDQzNDgrMDAnMDAnKS9LZXl3b3Jkcyhlbi1VU1xuZW4tVVNcblwoVVRDXCkgQ29vcmRpbmF0ZWQgVW5pdmVyc2FsIFRpbWUpPj4KZW5kb2JqCjMgMCBvYmoKPDwvTGVuZ3RoIDEwL0ZpbHRlci9GbGF0ZURlY29kZT4+c3RyZWFtCnicK+QCAADuAHwKZW5kc3RyZWFtCmVuZG9iago0IDAgb2JqCjw8L0xlbmd0aCAyMzcvRmlsdGVyL0ZsYXRlRGVjb2RlPj5zdHJlYW0KeJxFj01OwzAUhPc+xSxbKXnESVwadvlVLbWoxRbqohsrTZGRk0BbOBRH4EQcA0dCZTN6o5knzYcde2cROEKOCCITXtue3e2td9AnVuj/mAssOIkUumczVa5koXRdoVznSslG+nNTVzKH2ubyEYrWFOCJsCEU5tx2bhwMdJjGFEVxgIayNMAqLOIsS3hCqMbettbZEZextcY9YOsIe/NpuzPKjxdzxfAN/1kf7ck3R+QBki+8OTNcTYBoye9TKG/+2sfO4dk493PBYXabcJijJEmNXxUuk5TzhYjn+pVNhBPqpB6w1mzHfgFzPUtbCmVuZHN0cmVhbQplbmRvYmoKNSAwIG9iago8PC9UeXBlL1hPYmplY3QvU3VidHlwZS9JbWFnZS9XaWR0aCA2MjAvSGVpZ2h0IDExNy9GaWx0ZXIvRENURGVjb2RlL0NvbG9yU3BhY2UvRGV2aWNlUkdCL0JpdHNQZXJDb21wb25lbnQgOC9MZW5ndGggMTg4NjY+PnN0cmVhbQr/2P/gABBKRklGAAEBAQBgAGAAAP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAHUCbAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APv6iiigAoYgLknAHUmvAv2sv2kLD4azyeF/C8EGqeKCgM3mkm304EZBkxyzkchARxgkgYB+MPiB8SPHvje7efxR4s1O+DsT9n88x26eyxJhAPwr6bK+F8XjaaqyfJB7X1b80u3q0c1XFQg7bs/TS/8AFvhWxkMd74m0e2YdVmv4kP5FqbZeMfCN5II7PxTotw56LFqETk/gGr8ovJhznyk/75FMuIYfJY+Un3T/AAivdXA9K38d3/w/8Ew+uv8AlP16znkUVS8Nf8i7p/8A16Rf+gCrtfnslZtHoBRRRSAKKKKACiiigAooooAKKKKAKmt6rpejWJvtY1K00+1Vgpnu51ijBPAG5iBk1jf8LC8A/wDQ8eG//BtB/wDFV5b/AMFGlDfsy3gYAj+1LPgj/pqK/P7yov8Anmn/AHyK+tyThunmOFdeVRxd2rW7W/zOStiXTly2P1T/AOFheAf+h48N/wDg2g/+KrpAQRkV+RMcUXnJ+7T76/wj1Ffrla/8esf+4P5VyZ/kcMr9nyzcua+6ttb/ADLw9d1b3WxJRRRXzp0BRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABXI/Hfxmnw/8AhHrvi4qry6daE20bdJJ2ISJT7F2XPtmuur5z/wCCmmpNa/ArTdORiP7R12FXAPVUjkkx+ar+VehlWGjicdSoy2bV/Tr+BnVlywbPh7U7281LUrnUtRuZLq8vJmnuZ5DlpZGOWYn1JJqCirWg6dcaxr1jpFp/x8ajdxWsRI6NI4QH82r9q0iuyR4u4/QdH1jXLw2miaRf6nOv'
    + 'WKytXmYfUIDj8a09a+H3j/T7GSa+8DeJbeNUJLyaROAB7nbX6Z/C/wAFeH/AHg2z8N+HLGO3tbWMB3CjzLh8fNLI3VnY5JJ+nTFdDXwVXjaSqv2VG8fN6v8ADT8TvWC01epS8N5Hh2wBH/LrF/6AKu0UV8HJ3bZ3hRRRSAKKKKACiiigAooooAKKKKAPCf8Agox/ybNef9hSz/8ARor4Br7+/wCCjH/Js15/2FLP/wBGivgGv1Lg7/kWP/E/yR5eM/iCx/61P99f5iv1vtf+PWP/AHB/KvyQj/1qf76/zFfrfa/8esf+4P5V5fHG2H/7e/8AbTXA/aJKKKK+BO8KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA5r/hYnw//AOh68Nf+DeD/AOLr5u/4KTeJ/DmvfD/wzBofiHStTkh1d3ljsr2OZkXyHGSEJwMnGa+P/Kj/AOea/wDfNCoq/dVR9BX6hl/ClLB4mGIjVbcelvKx5dTFOcXGw6um+C09vbfGTwlc3c0cNvDr1m8ssrhUjUTISzE8AAdzXM0Hng19TUhzwlDurHMnZ3P1P/4WJ8P/APoevDX/AIN4P/i6t6L4x8I6xqC2GkeKdFv7p1LLb2uoRSyMBySFViSBX5R+VH/zzX/vmvav+Ce6Iv7UmklUUH+z7zoP+mVfA43hCjhsLUrKq24pvZdEd8MW5SSsfoZRRWL8QfFmg+CfCd34k8S6hHZafZrl5G5LHsiL1ZieAByTXw0ISnJRirtnc3Y2XZUQu7BVUZJJwAK8W+K37Ufwt8GTzWNpfzeI9RiJVrfSQJI0YdmmJCD8Cx9q+Vf2kP2hfFnxRvJtNs5JtE8MZIj02GTEl0v964cfez/cHyj/AGjzXj6gAYAwB0Ar73LODouKqY2Wv8q/V/5fecFXGdIH094m/bX8XzzOPD/gzR7GE/dN9cSXL/jt2Cubb9sD4wGTcB4cVf7o018f+jM14LRX0tPIMrgrKivnr+ZzPEVX9o+lvD/7afjy2lQaz4U0DUIgfmNu8ts5HsSXH6V7B8Mf2ufhn4lmjs9fW88LXchwDfASWxP/AF2TgfVwor4JormxPC+WV1pDlfdP9NV+BUcVVj1ufrdYXVrfWcd5ZXMNzbzKHimhcOkinoVYcEfSpq/M/wCAfxo8Z/CjVkbRro3mju+brRrlz9nlHcp/zyf/AGl49Qa/QL4K/Ejwz8T/AAbH4h8N3JZQdl3aS4E1nLjJjkXsfQjgjkV8FnGQYjLXzfFTfX/Pt+R30cRGp6nXV5r+0B8bfC/wiuNKh8Rafq102rrK0H2CKNwvl7M7tzrj74xjPevSq+Pf+Cp3/IV8E/8AXG+/nBXPkeDpYzMIUKvwu/4JsqvNwpuSMr9q39o7wX8TvhDP4U0LStct7yW8t51kvIIlj2xvuIysjHOPavmKiiv1nAZfQwNH2NFe7e+up5NSpKbuxVOHU+jA/rX3HD+2d8M0hVDoPin5VA/49YP/AI7Xw3RWOY5Thcw5fbp+7e1nbe3+RVOtKnflPuY/to/DIc/2B4p/8BYP/j1e9eCddtPE/g/S/EdhHNHa6tZxXcKTACRUkUMAwBIBwexNfk833T9K/UH9nL/kgPgv/sX7P/0StfD8S5LhMvo050E7t21d+h24atOo2pHaUUV4R+1l+0Xpvwzjk8N+G0g1PxXJGCyOcwacpHDzY6sRyIxz3OBjPzGDwdfGVlRoxvJ/1d+R1TnGCuz1n4g+NvCngbRv7U8Wa9Z6VbdEM8nzSn0RBlnPsoJr538fftq+HrSaS38G+Er7VdvC3WoTC1iJ9QgDOR9dtfIvjTxJr/i7xDNrvibVrrVNQmPzT3D52j+6g6Io7KoAFZdfoeA4PwlKKeJfPL7l/n+PyPPqYyb+HQ+htW/bK+KdzITZaT4ZsV7AWssp/MyD+VQ2H7YnxbglDXFr4aul7o9hImfxWWvn+ivZWRZYlb2EfuMfb1f5j648FfttN5qReL/AuEJ+a40m73FR6+VIBn/vuvoP4R/F/wCH3xJhx4W8QQzXiruk0+4Bhuox3zG3JA9VyPevzEqSzuLi0vIby0uJbe5t3DwzwyFJImHRlYcg+4ry8bwjgK0W6N4S8tV9z/Ro0hi6i31P1wor5H/ZQ/anmnvLXwf8UrxC0pWKx198KC3QJc9gT0EnTP3v71fXAOeRX57mOW4jL63sqy9H0foehTqRqK6CiiivPNApHZUUszBVUZJJ4ArJ8deJ9D8G+FbzxH4j1COx06xTdLK/6Ko6sxOAAOSTXwN+0p+0R4q+J95PpenST6J4WyVjsIpNst2v964Ydc/88x8o77jzXs5RkmIzKfuaQW8n+nd/0zGtWjTWu59S/Fn9qT4X+DLiaws72bxJqURKtb6SA8aMOzTEhB/wEsfavEPFH7anjW5mdfD/AIR0XToT9w3ksl1IPrtKD9K+ZVAAwBgDoBRX6BheFstoRXNDnfdv9FoefLFVJdbHucn7XPxmaTct5oKj+6NL4/V81s+H/wBs34lWkijVtB8O6lHn5tkctu5HsQzD/wAdr5zorulkeWSVnQj91vyIVeqvtH3Z8Mf2wfh5r80dn4os73wvcOcebP8Av7XPvKgyv1ZQPevoDSr6y1PTob/TbyC8tLhd8NxbyCSORfVWHBH0r8k6774D/GDxj8KNaW40C7Nxpkj5vNIuHJt7gdyB/wAs3/21/EEcV87mXB1KUXPBu0uz2fo9187/ACOmnjHe0z9NqK4/4I/Erw18UfBkfiDw5cH5SI7yzlIE1lLjJSQD8wRww5FdhX59VpVKNR06itJbo7001dBWJ488X+GPBeitq3irXLLSbMHAkuZQpc+iL1c+ygmvMv2r/j/pXwo08aPpccOpeKruLdBaM37u0Q9JZ8c49FHLY7Dmvgvx54r8R+NfEcuveKdXuNTv5Sf3kzfLGP7kaD5UX2UAV9JkvDNbHRVaq+Wn+L9PLz/BnNWxKhotWfYHjn9tLwdYTvB4U8MaprW3IFxcutnCT6gEM5H1UVwV5+2x42aUm18E6BEnYS3M0h/Mbf5V8yUV9rR4Yyqmreyv5tv/ADt+BxyxVV9T6p0H9tvXY5h/bfgDT54+5stQeNvwDqw/WvZPhL+0/wDC/wAb3UOnTX83h/UpiFS21ZRGkjHskoJQn2JBPpX55UjAMu1gCD1BrLFcKZZWi+SLg+6b/J3HHFVFu7n61a9qEOk6Fe6rcK7w2NtJcSLGAWKopYgZ74FfPUf7aXwyeNXGgeKsMMj/AEWD/wCPV47+y/8AHbVNN8O6n8NPFuoPdaTqGlXMGkXdzJl7GbyX2wlj1jboufutgdDx89W3FvGD/cH8q8fLeE6SqVaeMTdrcrTtdO/+RrUxbsnA+6f+G0Phn/0APFP/AICwf/Hq9s+FPjHTfH/w/wBN8X6RBdQWWqI7wx3SqsqhXZDuCkjqp71+Vtfo5+w7/wAmq+EP+vef/wBKZa5OJMjweAwkatBO7lbV30s/8i8NXnUk1I9Yooor4o7Qrzn42fHH4ffDAG21/VWuNUK7k0qxUS3JB6FhkBAfVyPbNcN+3D8crj4caLD4V8LTqvibV4TIbjAb+zrfJXzMHguxBC56YJPQA/B13PcXd5Nd3c8txcXDmSaeZy8krnqzMeST6mvr8h4Z+uQWIxLag9kt3/kvzOSvieR8sdz6f8X/ALa/iae4ZfC/gvTLKD+F9SuHuJD7lU2AfTJrlx+2B8YPO37fDe3P3P7NfH5+bmvBKK+1p5BldONlRXz1/M4niKr+0fUXhL9tfxPBcKvifwVpd7D/ABPp1w9vJ9Qr7wfpkV9EfBP47fDz4nMtpomqNaatt3NpWoKIrjjqUGSsg/3CffFfmrT7eWa3uY7m3mkhnhcSRSxOUeNhyGVhyCPUVw43hTL68X7Jcku62+af6WNIYqpF66o/XGivAv2EvjB4h+JHha+0bxPZ3Fxf6CqKdZWPEV2rfdWQ9BMAOcfeGDwc177X5njcHVweIlQq/Ej0oTU4qSCiivKv2n/jfoXwi8PqhjTUfEV9GTp+mB8cdPNlI5WMH8WIwO5EYbDVcTVVKjG8mEpKKuz0Hxh4k0Dwrosmr+JNYs9LsYvvT3UwjXPoM9T7Dk18/wDj79s3wJpdw9v4W0LVPEDKSPPbFpA3uC4Lkf8AABXyD8TvHXir4g+JG1vxbq81/c5Pkxn5YbZf7sUfRB+p7kmudr9Cy/g7DU4qWKlzS7LRf5v8PQ8+pjJN+7ofTt/+2x4zeYmy8EaFDHngTXU0jfmAv8qsaJ+234kjnX+2PAWl3EWfm+x38kTfhuVhXy1RXsPhzKmrexX3v/Mx+sVf5j9AvhX+1b8L/Ft1FYancXPhm+lIVU1QKIGY9hOpKj/gW2vb1lja3E6OrxldyspyGGM5B71+RxAIwRXv37GPx31LwV4gtfBXifUHn8K6i/kQPO5Y6VK3CspPSIkgMvRc7hjkH5vN+EYQputg29N4vX7n+j37nTRxbbtM9ob9s/4ZqzL/AGD4p+Ukf8esHb/trR/w2h8M/wDoAeKf/AWD/wCPV8NzgrcSA9RI2fz'
    + 'NNr2f9Ucr7P7zL63VP1H+CnxC0f4neBY/FehWt7b2ctxLAI7xFWTdG20nCswxn3rra8J/4Jz/APJs1n/2FLz/ANGmvdq/N8yoQw+Nq0YfDGTSPRpycoJs/IzY/wDzzf8A74NBDDqrD6giv1v8iD/njH/3wK+X/wDgqJHGnw68K7I1XOsvnC4/5YPX32XcWfXcVDD+xtzdea/S/Y4KmF5IOVz4voorqvgWAfjd4NBGR/wkNlwf+u6V9bVnyU5T7Js5Eruxy2x/+eb/APfBr2n/AIJ9qw/aj0klGH+gXnJU/wDPKv0G8iD/AJ4x/wDfApUiiRtyxIp9Qor88xnGH1nDVKPsLcyavzd/+3T0IYPlknzbBdTQ29vJcXEqRQwoXkkdtqooGSST0AFfnJ+1r8Ybz4r+Pn+xzSR+GdKkaPSbfJAl7G5cd2ftn7q4HUtn6f8A+CiXjuXwv8Fk8O2MxjvvFU5tGKnBW2Ubpj+IKJ9HNfBVdnB+VxUHjai1ekf1f6ff3IxlV35EFS2Ntc319DZWVtNdXVw4jgggjLySueiqo5J9hUaK7yLHGjSO7BURBlmYnAAHck8V+gn7HfwJsPhn4ah17XLaO48XahCGuJWAb+z0Yf6iI9jj7zD7xyOgFfSZxm9LLaHPNXk9l3/4COejRdSVkeA/DH9j/wCIPiC0ivvFGo2XhiCQAi3dDc3WD/eRSFU+xYn1Fehx/sReH/Iw/wAQdXMv95bGEL+WSf1r6qor87rcU5pUldVOVdkl+t3+J6EcLSS2PiH4ifsZeM9KtZLrwj4isNfVBkWtxF9knb2U7mQn6la+dfEOkaroOtXGj63p1zp2oWrbZ7W5jKSIfcHsexHB7V+tFeY/tNfBnQvi34RaGZIrPX7ONjpephPmjbr5cmOWiY9R26jmvVyvi+tGooY3WL+0lZr1S0a/H1MquEja8Nz82a7T4C/ErWvhZ8QrfxJpReW3YiLUrENhb2DPKntuHJVux9iQeX8QaVqOh69eaLq9q9rf6fcPb3UD9Y5FOCPceh7gg1Tr9AqU6WIpOE1eMl96PPTcXdbn6xeD9d0vxP4XsPEOi3K3On6lbrcW8q/xKwzyOxHQjsQRXgf7enwn8dfEy/8AC8vg3Sob5dNjulujJeRw7C5i243kZzsbp6Vzv/BMfx1Lc6VrXw6vZi32A/2jpoY/didtsqD2DlW/7aGvrCvySsq2R5o/Z6uN7X6pr5dH9560bV6WvU/ND4mfAz4m+APCr+I/FWh29np0cqRNLHfxSkM5wo2qxPWvOq+/v+CjH/Js15/2FLP/ANGivgGv0XIMyrZhg3WqpJ3a0+Xm+552IpqnOyADLADucCvZF/ZY+N7KGHhezwRkf8Te3/8Aiq8cj/1qf76/zFfrfa/8esf+4P5Vx8SZziMt9l7FJ8173v0t2a7mmHoxqXufnm37K3xwK/8AIr2f/g3t/wD4qvur4MaRqHh/4R+GdC1WFYb7TdItra5jVw4SRI1VgGHB5B5FdNRXwmaZ7isyhGFZJJO+if6tndSoRpttHkn7YPxeT4U/DnfpzRv4i1gtBpUTjcIyB887DuqAjjuxUdM1+dd9dXV9fT3t9cy3N1dStLPPM5Z5XY5ZmJ6kk16P+1147l8f/HjWdRSfzNP02U6bpoByoiiYhmH+++9voR6V5nX6Jw9lccDg4tr35av9F8vzuediKrnPyQV2Xwh+Fnjj4mai9t4S0ZriGFttxfTt5VrAfRpD1P8AsqC3tW1+yv8ACS7+LfxE/s6V5bfQ9NVZ9Xu4+GCE/LEh7O+Dg9gGPYA/ox4V0LR/DPh+10PQNOg0/T7KMRwW8CbVQf1J6knknk81y59xFHL37Giuap+C9fPyLw+H9pq9j5R8MfsRytaq/iP4geXMfvRabp+VH0eRsn/vkVc1j9iHTzbMdJ+Id6k2PlF5pySIT77GUivrKivinxPmzlze1/CP+R2fVaVtj82/jX8APiN8M7eTUdU0+PUtHj+9qmmkyRRj1lUgNGPcjb715fX65TRxzQtFLGskcilXRhlWB4IIPUV8L/ty/Ai38BXo8ceELXy/Dt/OEvLNB8unTsflKDtE54x/C2B0YAfWZFxP9bqLD4lJTezWz8vJ/gzlr4XkXNHY+dWAKkEZB6g19mf8E+PjRcazbD4X+KLxpr6ygL6JdStlp4FHzQMT1ZByvqmR/Dz8Z1f8K63qPhrxNp/iLSJTHf6XdJdW7f7SnOD7EZB9QTXv5tltPMMLKjLfo+z/AK38jno1HTlc/WWmyOkcbSSMqooJZmOAAO5NZfgPxBZeK/BeleJdOObXVrKK6iGc7Q6htp9xnB9xXkv7fvjqXwf8B7jTrGcxah4mm/s2JlOGSIqWmYf8ABX/AIGK/IMLg6mIxUcMtJN29O/3Hrymoxcj5b/bD+Mdz8U/Hz2mm3DL4W0aVo9NiU4W6cZDXLDuW5C+i+7GvH6AABgDij8CfYDJP0r9pwuFpYWjGjSVor+vvZ40pOUm2SWdvcXd5FaWkEtxcXDiOGGFC8kjHoqqOST6CvoP4WfsgeP/ABFaxX/inUbTwvbSgEW7x/abvB9UUhUPsWJ9RXuv7F/wKsvh54Xt/FPiKySXxbqUIdjKuf7MiYcQp6Pj77dc/L0HPvFfD5xxbUjUdHBWsvtb39OlvPqd1HCK15ny5B+xJ4UFvibx1rzy4+8lvAq/98lT/OuW8cfsU65a2rT+EPGlrqDqCRbalam3ZvYSIWGfqor7MorwafE2awlf2t/VL/I2eGpNbH5T/ELwb4o8Da+2i+LdFudLvMEosoBSZRxujcZV191J96u/B34feIviZ44g8M+G7fdK/wA91dSA+TZQ5wZZCO3oOrHge36T/FLwL4Z+IfhOfw94p05Lu1lGY3HEts/aSJ+qsPUfQ5GRWd8CPhf4b+FPgtdA0CNpZJGEl9fzKPPvZcfecjoB0CjhR07k/RPjNPBt8lq23931/wCB+Jh9T9/fQm+Cfw38OfC/wTD4d8PQej3l5IB517LjmSQj9B0AwBVD9pT4mWfwr+Ft54jlRJr+Q/ZtLtWP+vuWB2g/7KgFm9lPciu+r4H/AOCiXjeTxJ8cP+Eagm3af4WtxAEB+U3MgDyt9QPLX/gJ9a+dyXByzXMV7Z3XxS8/+HdkdFaapU9Dw/xDq2p69r15res3sl7qGoTNNdXEh+aRz1PsOwA4AAA4FU6K6j4N+BNY+JPxEsPCWi4SW6Jee4ZcpaQL9+VvXAIAHdio71+tTnTo03KTtGK+SSPJScn5mf4G8KeJPGevLovhXRbvVb5hkxW6ZEa9NzscKi+7ECvffCP7F/ju+tUn8QeJ9G0dmGTBDG93InsSNi5+hNfW3wh+Hvhj4beEIfD/AIYsVhiUBri4YAzXcmOZJW/iY/kOgAHFdTX51mHGOJnNrCJRj3au3+i/rU9Gng4pe/qz4y1j9iTxDHbltJ8f6bcSY4S606SFT/wJXfH5V4n8Xvg58Q/hp+/8UaCy6fu2rqVo/nWpJ6AuOUJ9HC1+nNQ39ra31lLZ3ttDc286FJYZkDpIpGCrKeCD6GsMJxhj6c17a04+ln8mv8mVLB02tND8kaK9+/bY+A8Xw21JPFnhWFv+EX1Gfy5LfJb+zJzyEB/55Nztz90/L3WvAa/RsFjaOMoRr0XeL/DyfmebODhLlYV+jn7Dv/JqvhD/AK95/wD0plr846/Rz9h3/k1Xwh/17z/+lMtfM8af7hD/ABr8pHVgv4j9D1iiiivzM9I/MH9pLxHP4s+PPirWppTIrapLbW+f4YYT5SAfgmfqTXE1tfEiym034j+ItPuVKzWusXcbg9ciZ6xa/dcNCMKEIw2SVvuPDk25O57j+yj+zvefFixm8Raxqkuk+HbecwI0CBri8kXG4Ju4RRnBYg5OQBwTX0H/AMMdfCH7P5e/xFvx/rf7T+b642bf0rmf+Ce3xb8KxfD6D4b6zqFvpur2VzM9l9oYIl9HI5fCMePMDMwK9SMEZ5x9TV+cZ9m2a0cdOHO4RT91LS66PzuejQo0nBO1z41+Lf7GWo2Gnzah8PPEL6m0YLf2ZqarHK49I5lwpPsyge9eLfBD4P8Aiv4j/EmXwpDaXGmLpsu3W7q5hK/2aoOCrKespwQqd+vQE1+mdQ29pawXE88FtDFLdOHndIwrSsFChmI+8QqqMnsAO1Rh+LsdToSpztKXSXb17/1e45YSDkmjH+Gvg7QPAXg2z8MeGrJbWxs147vK5+9JI38TseSf6YFb1FFfLTqSqSc5u7e7OpJJWRyfxu8e6Z8NfhrqXi3VB5i2ibba3DYa5nbiOIfVup7AE9q/M3x14l1rxj4uvvE3iG8a61LUZfMmc/dUdFRB/CijAA7AV9Bf8FMPG0up/EbS/AltMfsmh2wvLtAeGuZR8uf92PGP+uhr5nr9Q4UyyOGwaxEl789fRdF89/u7Hl4qo5T5eiCtHwpoGueJ9ci0Xw7pN3qmoT/ctrWMu2O7HsqjuxwB61Z+HfhXWPG/jbTvCugwiS/1Oby492dkagZaR8dFVQWP09a/SP4E/Czwx8K/CEejaDbK9zIoN/qMiDz72THLMey+ijhR+JPZnme0ssgklzVHsv1fl+ZFCg6r8j5Q8GfsZ/ELUrVLjxBr2jaHu626hruVfrt2p+TGtzVP2I9dS3J034hafNLjhbnTHjU/8CWRiPyr7Kor4WXFmayldTSXblX63f4nd9VpW2PzR+MHwM+JPw2ge917RBcaXGedT05zPbqPV+A0Y92UD3rznqK/XKaOOaFopY1kjkUq6MMqwPBBB6iviP8Abk+ANr4NV/iB4KtPJ0OaUDVNPjHy2DscCWMdomYgFf4SRjg4X6fI+KFi6iw+JSU3s1s/Lyf5nNXwvIuaOx800UUV9icZ9/f8E5/+TZrP/sKXn/o017tXhP8AwTn/AOTZrP8A7Cl5/wCjTXu1fi+df8jKv/if5ns0f4UfQK+Xf+Co/wDyTnwr/wBhl/8A0Q9fUVfLv/BUf/knPhX/ALDL/wDoh634c/5GtH1f5MWI/hSPi2uq+BX/ACW/wb/2MNl/6PSuVrqvgV/yW/wb/wBjDZf+j0r9axX8Cfo/yPJj8SP1Kooor8KPcPhP/gpdrT33x10/Rwx8rSNGT5c8B5ZHZj/3ysf5V8717R/wUC3f8NS6zu6fYbPb9PJH9c14vX7RkkFDLaCX8qf36njVnepI9j/YP8JQ+K/2jNMe7hEtroMEmqSKehdCqxZ+kjq3/Aa/RGviT/gl6Y/+Fr+Jgf8AWf2JHt+nnjP/ALLX23XwHF9WU8y5HtFK3z1/U78Ikqdwooor5Y6gooooA+H/APgpj4Sh0n4paP4ttYhGviGyaK6I/ingKgMfcxug/wCAV8119lf8FTDH/wAIj4OBx5n9pXG3/d8oZ/XbXxrX6/w1VlUyqk5bq6+5tL8DyMSkqrPV/wBiHWn0T9p7wywYiPUHmsJRn7wkibH/AI+qH8K/R2vzD/Zn3f8ADRXgfZ1/t62/Ldz+ma/TyvkuNYJYynLq4/qzrwT9x+p4T/wUY/5NmvP+wpZ/+jRXwDX39/wUY/5NmvP+wpZ/+jRXwDX0HB3/ACLH/if5I58Z/EFj/wBan++v8xX632v/AB6x/wC4P5V+SEf+tT/fX+Yr9b7X/j1j/wBwfyry+ONsP/29/wC2muB+0SVz/wAV9Zbw78MPEWvI+19N0m5uUPoyRMV/UCugrz39rDef2a/G3l/e/sSfp6bef0zXxOEgqmJpwezaX4nbN2i2fmZHu2AuSzEfMT3Pc0tFJJny2x1xX7oeGfob+wT4Tg8M/s56Te+UFvPELNqdy5HJDnEYz6CNU/M+te0VyP7P5hPwL8GmDHl/8I/Zbcf9cErrq/D8xrSrYyrUlu5P8z26atBIKKKK4ywrF+I3hux8YeA9X8L6kitbatZyW75GdpYfKw91bDD3AraoqoTlCSlF2aB6n5H3lvPZ3k1lcjbPayvDKPR1Yq36g1HXQ/FwxH4teKjBjyjr17sx6faHrnq/d6cueCl3R4T0Z+gP/BO3WZdV/Zqs7SVtx0fULmyX2Xf5qj8pQPwrxr/gqFq8k/xM8M6EHzFY6VJdFfR5ZdufyhH516L/AMEww/8AwpbXCfuf8JBJt/78Q5rxz/gpMHH7RcJb7p0G22/9/Jq+Cy6jFcT1fLmf3/8ADnfUk/qyPAa9Q/Y18KweL/2jfD1heRCS0sZH1K4RlyGEI3ICPQyGOvL6+g/+CabRD9oS9EmN7eH5/Lz6+dDn9K+uzirKll9acd1FnHRV6kUfeNFFFfip7QUUUUAFFFFABX5R/ETV5df+IWva5M259R1W5uCfZpWI/TFfqvfbvsc2373ltj64r8kWz5jbuu45+ua+84HguavLr7v6/wCRw45/CJX2j/wTD8JwWvgXXfGssam61O++wwORysMIBOD6M7nP+4PSvi6v0G/4J5mI/sv6T5eNwvbzzP8Ae89/6Yr2eLqsoZY1H7Ukn6av9DHCJOqe3UUUV+VHqBRRRQBg/FLwvZeNfh3rHhXUEVoNVs3gyR9xyMo491YKw9xX5VzwzW1xJbXC7ZoJGilX0dSQR+YNfrlX5T/FAxH4n+JjBjyjrd7sx0x574r77gitL99S6aP56r+vQ4MavhZh1+jn7Dv/ACar4Q/695//AEplr846/Rz9h3/k1Xwh/wBe8/8A6Uy13caf7hD/ABr8pEYL+I/Q9Yooor8zPSPhb/gob8Lrzw58Rn+IOnWzNoviFl+2Oi8Wt4BtO70EgAIP94MO4z86V+s/iLSNM17Q7rRtZsYL6wvYjFcW06BkkU9iD/kV8d/Hj9j/AFrTrifVvhhcjUrEkt/Y93MFuIe+IpW+WQegYhvdq/ReH+JKDoxw2Klyyjom9mul30a+48/EYaV3KJ8tsAwwwBHvXo3w1+OvxU8CxR22i+K7iexiwFsdSH2qED0Xf8yj/dYVxHiXRdZ8O6q2meINJvdLvEPNvewNE/4BhyPcZFUa+wq0aGJp2qRUovvZo41KUXo7H2L8Nf21NNnMdt4+8KTWTHhr7SX86L6mJsOo+havoz4c+PvB3j3Szf8AhHxDZapEo/eJC+JYvZ4zhk/ECvyuq54d1fVdA1qHV9D1K603ULc5iurWUxyL7ZHUex4PcV8xjuEMHWTeHfJL71/n+PyOmni5r4tT9aKK+b/2P/2kx46vIfBfjloLbxEy4sr1FCRangZKleiS4BO'
    + 'Bw3OMHivpCvz3HYGvgazo1lZ/g13R6FOpGavE/L/9o7V3134++MdTZy4k1qeKMn+5E3lKP++UFcXWt4+3jx/r4k+//a93u+vnvWTX7Vh4KFCEVskl+B40neTZ9a/8EvfCkElx4m8cXEQaWEx6XZsR9wECWUj3OYh+Br6/r53/AOCZhi/4UBqAXHmDxDceZ6/6qHH6V9EV+ScR1ZVM0rc3R2+5HrYdWpIKKKK8Q2CqPijR7DxB4bv9C1SBZrLUraS2uIyPvI6lT+hq9RTjJxaaeqA/JrxVpFx4e8U6noF2SZ9KvZrOQnuY3KZ/HGfxqhXc/tOGM/tGeN/K+7/bs/555/XNcNX7rh6jqUYTe7Sf3o8OStJo+/v+Cc//ACbNZ/8AYUvP/Rpr3avCf+Cc/wDybNZ/9hS8/wDRpr3avx3Ov+RlX/xP8z16P8KPoFfLv/BUf/knPhX/ALDL/wDoh6+oq+Xf+Co//JOfCv8A2GX/APRD1vw5/wAjWj6v8mLEfwpHxbXVfAr/AJLf4N/7GGy/9HpXK11XwK/5Lf4N/wCxhsv/AEelfrWK/gT9H+R5MfiR+pVFFFfhR7h8Lf8ABTDRHsfjfpethD5Wr6Mq7scGSGRgw/75eOvnSvvz/goR4Cl8XfBE63YQNLqHhWY3yqoyz25G2dQPZcP/ANs6+AwcjIr9c4YxccRlkFfWHuv5bfhY8nFR5aj8z179hnxfD4Q/aL0lryYRWetxvpUzk8BpCpiJ/wC2iIP+BV+i1fkWCQQVZlYHIZTgg9iD2Nffn7G/x60/4ieHbfwx4kvY4PF1jFscSMF/tRFH+uj9Xx99eoOSODx4fGGV1JuONpq6StL9H+j+Rtg6qXuM94ooor8/PQCiivKv2ofjZoXwn8KyKssN74lvIiNN0wNk5PHmy4+7Gv5sRgdyN8NhquJqxpUo3kyZSUVdnzd/wUr8YQ618WtM8KWkwkj8N2bNc4PC3E+1iv1EaRn/AIFXzjVnWtRvtX1i71bVLqS6vr6d7i5nkPzSyMcsx/E/hVav2jLsGsHhKeHX2V+O7/E8apPnm5HrX7DeiPrf7T3hwBC0em+dfykD7ojiYLn/AIG6V+jVfK3/AATL8By2Ph3WPiJfQlW1ZvsGmlh1gjbMjj2aQAf9sq+qa/NuLMXGvmTjF6QSj893+dvkelhY8tP1PCf+CjH/ACbNef8AYUs//Ror4Br9Av8AgolE8n7MeoMoyItRs3b2HnKP6ivz9r6zg7/kWv8AxP8AJHJjP4gsf+tT/fX+Yr9b7X/j1j/3B/KvyOdiil1GWXkD3FfrF4L1W21zwfpWs2ciyW+oWMNxEynIKugYfzrzeOIvloS6e9/7aa4H7Rp1hfFDRj4i+G3iDQFXc2p6XcWyD/aeNlH6kVu0V8DCbhNSW6O96o/IpA6qFkUq68Op7EdR+dLXqX7Y/gOTwD8edXtooPL03WZG1PTmAwuyRiXQf7km4Y9CvrXltfueGxEMRRhWhtJXPDlFxk0z9B/2AfF0HiX9nfTtNMoN74bdtOuULfMFB3RNj0MbKPqp9K9tr80f2YfivffCX4jJrCpJc6RfKLfV7NOskWciRAePMQkkeoLLxnI/RnwX4k0Pxb4btdf8OalBqGnXibop4WyPcEdVYdCDgg8Gvy7iXK6mExkqqXuTd0/N7r/LyPUw1VTgl1Rq0UUV82dAVg/FDxRZeCvh5rHirUHVYNKs3nwT99gPkQe7MVUe5FbV1PBa2slzczRwwwoXklkYKqKBkkk8AAd6+Ef23vjtB8RdSTwf4TuC3hnTZ/Mnul4GpTrwCP8ApknOP7x+boFr18lyupmGKUEvcXxPsv8AN9DGtVVON+p4BcTzXVzLdXLbpriRpZW9XYlmP5k0yitPwX4f1LxZ4u03wzo8Ze+1a6S2g44UseXPsoyx9lNfscpRhFt6JHj7s+8f+CeeiyaT+zRp91Ku1tYvrm+H+6X8tT+Kxg/jXjn/AAVE0WSDx94W8QhP3V5pstmzf7cUm8D8pT+VfYHgzQ7Lwz4R0zw7pq7bTS7OO1hGMfKihQT7nGT9a8u/bq8By+OPgLeyWEBm1Pw/INTtFVcs4QESoPrGWIHcqK/KstzOP9u/WZaRnJ/dLRfdoerUp/uOXsfnfXo37Jfi+DwR+0F4d1m9lWKymnaxvHY4VI5hs3H2VyjH2FecKQyhgcgjINDAMpUjIIwa/UcRRjXozpT2kmvvPMjJxaaP11or5s/Yj+P9l4n0Oz8A+Mb9YfEVmggsLqdsDVIwMKNx/wCWwAwR1bGRk5x9J1+K4/A1sDXlRqrVfiu6PZp1FON0FFFFcZYUVxfxu+KPhT4W+FX1fxHer5zqRZafEwNxeP8A3UX09WPA7msz9m34xaB8XfCTX1igsdWs8LqWlvJue3Y9GU4G+NscNj1BwRXUsDiXh3ieR+zTtf8Ar8yeePNy31PR6/Kb4laPJ4e+JHiDQpV2tp2rXMGPZZW2/muD+NfqzXwb/wAFGPA8nh740R+K7eHFh4otw7MB8q3UShHX6lBG3v8AN6V9PwZio08ZOi/trT1X/AucuMjeCfY+fa+zP+CYPi6C48I6/wCBppFFzp93/aNshPLwygK+P910Gf8AroK+M66L4UeNNZ+Hvj7T/FuhOv2qxf54XJCXMTcPE+P4WH5EAjkV9vnOX/X8FOgvi3Xqv6scVGp7OaZ+qVFcb8E/ib4W+KPhKPW/Dl4pkUAXljIwFxZSY5SRf5MOGHINdlX43Wo1KNR06itJbpnsKSaugooqrrWpafpGk3Gp6rewWVlaxmSe4uJAkcSjqWY8AVCTbstxmN8XfFtn4F+GuteLL51WPTLN5UU/8tJMYjQe7OVX8a/LCWWWeZ5523TTOZJG/vMxyT+ZNe4/tm/Hb/haOtR+H/Djyx+FdMm3xuwKtqMwyBKynkIATsU88lj2A8Mr9V4YyqeBwrnVVpz1t2S2Xrvc8rFVVOVlsgr9HP2Hf+TVfCH/AF7z/wDpTLX5x1+jP7C80cv7K3hQIwPlxXCN7MLmXIrm40/3CH+NflIvB/xH6HrdFFFfmR6QUV8//tFftSeH/h94ng8O+HbOPxFqFvcp/a5jl2xWkYPzxqw4abGeOin73PFeyfDnxf4e8deE7XxH4Z1GO9sLpeGU4aNu6OvVXHdTXbWy7FUKEK9SDUZbP+tr9L7kRqRlJxT1RZ8VeHdA8TaY2neItGsdUtWz+5vLdZVGe4DA4PuK8O+I37H/AMNNc8yfw3PqHhm6blRbyefb594pCSP+AstfQlFLC5ji8I70Kjj+X3bBKnCfxI/OP46fs8/ED4Y2kuq3cEOsaHF9/U9PBIgGeDNGfmjHTnlfevJ6/W++ht7mymt7uKOW3mjZJo5VBR0IwQwPBBGc5r8nvE8enxeKNUi0lt2nx3862ZznMIkYR8/7uK/SeG86rZjCcay96NtV1vf8dDzsTRVNprqVbO4ubO8hvLK4kt7m2kWWCaM4aKRSCrA9iCAa/UL4DeMD49+D/h/xa6qs2pWStcqvRZlJSQD23q2Pavy5r9Bf+CeXnf8ADMGl+bnb9uvPLz/d89/65rl40oQlg4VftKVvk0/8kVg5PnaPjH9pTR30H9oHxjpjRlFXWZp4wf7kp81T+UgriK+nv+CmXgeTT/HWk+P7WE/ZdYgFjeuBwtxECYyf96PI/wC2dfMNe/lGKWKwFKquyT9Vo/xOetHlqNH1h/wS/wDF0FvqniTwNcyhZLsJqdkrHG8qPLlA9Tjyj9AfSvsSvyh8DeJNX8IeMNP8TaDc/Z9R0ycTQOfut2KMO6spKkdwTX6Ofs9/F7wx8WPCq32kzrb6pboP7R0qRx51q/c4/iQno44PscgfEcW5VUp4h4yCvCVr+T2+5/md2Eqpx5HuehUUUV8YdgVm+Mdd0/wx4U1HxDq0whstLtXuZ3Jx8qqSQPc4wB3JFXb25t7Ozlu7ueK3t4ULyyyuFSNQMksx4AHqa+Gv22vj/D4/kPgnwbcM3hu2mD3l4Mj+05FOVC/9MlPP+0QD0Az62T5VVzHEKEV7q+J9l/n2Mq1VU436ngXiTVbnXfEmo65ef8fGqXkt3MPRpHLkfhuxVKiiv2WMVFJLY8Y+/v8AgnP/AMmzWf8A2FLz/wBGmvdq8G/4JwypJ+zVAinJh1e8Vx6HeG/kwr3mvxjO/wDkZV/8T/M9mj/Cj6BXy7/wVH/5Jz4V/wCwy/8A6IevqKvl3/gqP/yTnwr/ANhl/wD0Q9b8Of8AI1o+r/JixH8KR8W11XwK/wCS3+Df+xhsv/R6VytdV8Cv+S3+Df8AsYbL/wBHpX61iv4E/R/keTH4kfqVRRRX4Ue4NmRJYmilRXR1KsrDIYHqCO4r87/2wvgxdfCzxw19plu7eFdYmZtOlUZFo5yTbOe2OShPVeOqmv0SrL8aeHNF8WeGbvw/4h0+G/06+j2TwSjgjsQeoIOCCOQQCK9nJc3nluI594P4l+vqv+AY1qKqRt1Pyfp1vLLBcR3EEskM0Lh4pY3KvGw6MrDkEeor279pT9mzxT8Obq41jw9Fc694XyWE8ab7myX+7Mi9QP8Anoox6ha8OUhlypBHqK/WcLjKGLpKrRlzRf8AVn2PJlCUHZo95+Gf7WnxP8MWcdjrIsfFFtGAFe/BjuQPeZPvfVlJ969Ej/bgh+z/ALz4aTedj+HWV25/79Zr5Dorz63D2V1pc0qKv5XX4JpGkcRVitGfQ3xC/bD+I2t2slp4d03TPDccgI8+PN1cAH0ZwEB99hrwHWNQv9W1SfU9Vvri+vbp989zcymSSVvVmPJqvQTgZNd2Ey/C4NWw9NR/P79yJ1Jz+JhXefs7fC3WPix8QIdCsBJBp1uVl1a/C/Law56A9DI2CFHrk9Aa1f2e/gR4z+Kt/FcWtu+leHw48/WLmI7CvcQKcea30+Udz2r79+EvgHw18OPB0HhvwxZeRbRndLK53TXMhHMkjfxMcfQcAAAAV4efcRUsFB0aLvVf/kvm/Psvv896GHc3d7Gx4Z0fTvD/AIestD0i1S1sNPt0t7aFBwiKMAe/Tr3q9RRX5ZKTk229T1Dz/wDap8OTeK/2efFejWsfmXLac09uoHLSRESqB7kpj8a/MpGDKGHRhkV+up54Nfnf+2R8HL74ZePrjVdOtHbwrrNw0tjOikpaSMSWtnP8ODnZnqvHVTX3XBmYQg54Sbs27rzezX5ficOMpt2mjxuvaP2f/wBpTxl8MNAj8ONYWuvaJCxNtbXMrRS2oJJKxyAH5cknaVOM8EDivF6K+4xWDoYun7OvHmicMZyg7xZ9Zaj+2/em2b7D8N4UlxwZ9YLLn6CIH9a+vbGUz2MM7AAyRqxA7ZGa/I+T7pr9bNH/AOQRa/8AXBP/AEEV+ecVZXhMDGj9Xhy35r6t7W7tnoYWrObfMzzb9rT4SQfFn4btZW3lw69pZa40i4fgb8fNEx7I4AB9CFPavzl1ewvtK1a50vVLOazvrKVobm2mXa8MinBVh61+tleK/tV/s+aP8VbU61pUkOleKrePbHeFf3V4o6RzgcnHZxyvuOKnhviBYL/ZsQ/3b2f8r/yf4DxGH5/ejufnrXUfC34jeNPh1qrX/g/XZ7AykGe3IElvcf8AXSJvlJ9+COxqn8QvB3ibwN4ifQ/Fmj3GmXik7BKMxzAfxRuPldfcH64rDr9IcaOIpa2lB/NM87WL7M+p/C/7bWvwW6x+IvAmn3sijBlsL57fd77HV8fnVzW/23rt7Uro/wAOo4pscPeaqXUf8BSME/mK+TKK8h8NZS5c3sfxl+VzX6zVtueifGT43fEX4mo1p4h1gQaWWyNLsEMNsfTeMlpP+Bkj2rzuirGk2F/quqQaZpdlcX19ctsgtraIySyt6Ko5NevRoUcPT5KcVGK7aIylKUnd6srMQqlmOAOpNfbP7AHwUuPDGm/8LH8VWbQ6vqUGzSrWVcPZ2zdZGB6SSDHHULx1YgUv2Uf2Whot5a+MfibBDNqEREtjomRJHbMOQ85HDuOoUZVe5J6fVNfB8ScRQqweEwrun8Uu/kvLu+vod2Gw7T55BQRkYIoor4U7j8+/21/gvcfDfxrJ4i0S0Y+FdanLQlF+XT52yWgb0UnJQ+mV/h58Pr9ZfFGi6T4j8P3eh67YQ3+nX0RiubaZcpIp/ke4I5BAI5r4V/aW/Zj8S+A7m41zwhDda94ayXKxqZLuwXriRRzIg/vqM/3gOp/S+HuI6deEcNipWmtE39r/AIP5+p5uIw7i+aOx4J3BBIIOQQcEHsQfWvaPhb+1H8VPBtnHYXN7beI7GIbUj1ZWaZB6CZSGP/At1eLKQRkHNLX1GKweHxUOSvBSXn/WhyxnKLvFn1pb/tv3It8T/DaNpscmPWSFz9DDmuU8cftj/EfVrZ7bw/pOj+H1bgTqGup1+hfCD8UNfO1FedT4dyqnLmVFX823+DbRo8RVf2i/4m1vWfEetTaxr+qXep6hP/rLm7lMjkemT0A7AYA9Ku/Dfxfr/gTxjaeJ/DV6bW/s24zzHMh+9FIv8SNjkfQjBANYZIAyTgV6t+zv8A/GPxUvobxIJNI8Obh52r3EePMXuIEP+sb3+6O5PQ9+Kq4XD4duu0qdra7W7W/QiKlKXu7n3B+zv8VtC+LXgVdb0sG3vbYiHU7Bzl7SbGcZ/iUjlW7j0IIEv7RHw3sPin8L77wxdOkN1xPp10wz9muVB2N/unJVh3VjWv8AC7wR4c+H3g+38NeF7BbWzt+WYndJO5+9JI3VnPc/gMAAV0VfjdTEQpYx1sJeMU7xvuv6/q57Ci3C0z8mvFGi6r4b8RXuga5ZSWepadMYbmB+qMPQ91IwQRwQQRVCv0S/ao+AmjfFnS11Gyki0zxRZxbLW/K/JOo5EU4HJXPRhyueMjIPwT8RPB3ifwL4jk0PxZo9xpt4pOwSDMc6j+OJx8rr7j8cGv1'
    + 'XJ87oZjSVnaot4/qu6/LqeVWoypvyKnhXX9c8Ma5HrPh3VrzS9Qh4S5tJSjY/unsyn0OQfSvdPCf7Y3xQ0y1WDV9N0LXNv/LaWF7eU/Uxnb+Sivnqiu7FZdhMX/HpqX5/fuRGpOHws+ltW/bU8ez27Jp3hHw/ZyMMCSWSafb7gZWvGPip8UvHvxGuFfxd4iuLyBG3R2UYENrGfURLgE+7ZPvXIUVnhcpwOFlzUaST77v72OVWpJWbCjOelev/ALLXwG134ra1DqN/DPp/hKCQG6vyNrXYB5it8/eJ6F+i+5wK0/27PhU3gD4mDXNH01bfwzriJ9l8hMRWs6IFaE46ZChx65b0NL+1cL9dWDUvfs3/AMD1628g9lLk57aHhte4fsv/ALR2o/Cbw7ceG77Qf7b0eSdri3WO58ma2dsbgCQQykjOOMEnnmvD6K6MXg6GMpOlXjeJMJyg7xP0m/Zj+MMPxi8P6rqsHh+XR00y9W1Ect0JmkzGH3ZCjH3sY5rzD/goN8WPG3g2Ox8IeHbaXS7PW7VpJdcR/wB5IAcPBER/q2AKlm64Ybccmo/+CXH/ACTnxV/2Gk/9EJXufxs+HXh/4n+BLjwzr8bKrHzLW6jA82zmAO2RCe4yQR0IJB61+Y1PqWXZ41OnelF7b20Wuu9nrqemuepQ0ep+XIGOldH8NPHni/4f62dV8Ia5cabM+POjXDQ3AHQSRtlX/EZHYitX44fCbxl8K9caz8R2DPYyORaatApNrcjt838D+qNz6ZHNcPX6fGVDF0bq04S+aZ5nvQl2Z9V+C/22NXt7dYvFnge2vZFABuNMuzDu9zHIGH/j1dLP+234WEOYfAmuPJj7r3MCr+YJ/lXxfRXj1OF8qnLm9lb0b/zNliqq6nvHxx/aq8beO9FudB0awg8M6TdoY7jyJjLdTxngoZcKFUjg7VyQSM4rwcAAYA4HSigZLKoBLMQqqBksT0AHc162EwWHwdP2dCCiv63e7MZzlN3kxVWR3WOKNpJHYKiIMs7E4CgdySQK/UD9nnwlJ4F+CvhzwtcAfabGxX7Vj/nu5Mkn1+d2H4V87fsS/s6aha6xZ/EX4g2DWptSJtG0mdcSCTtcTKfu46qh5z8xxgCvryvgOLc2p4mccLRd4xd2+l/+Br956GEouKcn1OY+MngfSviN8OdS8JauNsN9F+6nC5a2mXmOVfdWAPuMjoa/Mv4heFdb8EeMr7wv4itTb6hp8m1wM7ZVP3ZEPdGHIP4dQa/VuvMP2mPgroHxd8Nqlwy6fr1ih/s3VETLR558uQfxxk9uoPIwc54+HM8/s+o6Vb+HL8H3/wAy8RQ9orrc/Nqreg6rqmh6xDq2i6jdadf2xzDdWspjkT6MO3t0NbfxW+H3i34ceIm0fxbpMlnISfIuF+a3uh/eik6N9OGHcCuZr9RhOnWpqUWpRfzTPLacX5nv3gv9r/4qaPaLbatb6N4gVAAJbqBoZiPdoyFJ99tbeo/treOZYCtj4N8P20hHDyzzTAe+0bf518zUV5ksgyuUuZ0Ff5r8FoarEVUrcx3PxY+MHxE+I6mDxT4illsd2Rp1qogtQe2UX7+PVy1cNRXpn7N/wV8TfFvxBGLWKWx8PQyYv9XZPkUDrHDnh5D7cL1PoeyUsLgMO5O0IL5L/h/xZHvVJd2eZ5or6E/bw+DcPgHWtL8SeF9NMPhm4s4bGVY1yLW4jXapc/8ATRQPmPVg2eSM/PdGBxtLG4eNels/w8mFSDhJxZ7F+y38ftT+D0V/pkujjWdF1CUXDWwuPJkgm2hS6MQQQwC5BH8III5z67P+3Ba+Z+4+GtyyesmsKp/IRH+dfIFFcWKyHLsVWdarTvJ76tfky44ipFWTP10r5m/4KbWhu/h74XQSbNusOc7c/wDLB/eiivzPh9tZnRa7v8meliP4TPjj+xW/5+h/36/+vXUfBDSGj+NPhCT7SDs1+yOPL6/v096KK/U8TUn7CevR/keZFLmR+nFFFFfih7IUUUUAFeS/Ff8AZv8AhX47uJb650VtI1KUkve6Q4t2dvV0wUY+5XJ9aKK6MPiq+Gnz0ZuL8iZRjJWaPm/41fstxeCLNr2y8cSXUOCyxT6WN4HoXWUA/wDfNeAXViYdT+x+buO7G/Zj9M0UV+n8O5hicXh3KvK79F+iPNxFOMJWij2j4Hfs5H4gbZJvGX2CMjJVNL8xvwJlA/SvpT4X/sr/AAr8JTxXt9YXHiS+iIIl1dw8SsO4hUBP++g1FFfJZ5nOP+sSoqq1Hy0/FanVQo0+VO2p7XDHHDCkMMaxxxqFREXCqBwAAOgp1FFfKnUFFFFABVTXtK03W9HuNJ1iwt76xu0Mc9tcRh45F9Cp4NFFNNp3W4Hzd8Uv2OfBV61xqXhPXtQ8PAAubR4xeW6+yBmV1H1c18y+OPhjL4b1Z7I68l1tbG8WRj/TzDRRX3fDub46vJ06tS6Xe352ucOIowjqkb/wp+BMnjW+jtz4sWxVyASNM8w/+jRX6J2cXkWcUG7d5carnHXAxRRXk8T4utWxEYTldRvbbr/wxrhoRUbokooor5k6TJ8Z+F/Dvi3RX0jxNotlqtlJ1huoQ4B9Vzyp9xg18/fEL9jTwLftLd+F9f1TQDgt9ncC8gHsochx/wB9miiu/B5ljMG/3FRxXbp9z0M504T+JHy98W/hnJ4G1CS2bXV1DYSNwsvJz/5EasHwH4YfxNqSWa362m9sbzB5mPw3Ciiv1bD4qtPAe2k/et5HlyilUt0PqD4Z/sbeHr2zt9T8R+NdSvYZBk21laJa59i7NIfyxX0T8Lvhl4F+HdkYPCPh21sHdcS3ODJcTf78rZY/TOPaiivy/MM2x2KlKFaq3HtsvuVkenTpQjqkdbRRRXlGoUUUUAFFFFAHl/xY/Z8+Fvj+4kvdU0AWOpSnL6hpb/Z5mPqwA2ufdlJr59+Kn7Iln4bsX1DTPHty8PJWG60tXcD/AH1kUH/vmiiveyvOcwo1I0oVXy9nr+d7GFSjTabaPCdQ8DSWupG0OrK+Gxv+y4/TfXrPwf8A2Xh40jWa58ctaR4yUi0kM34MZcfpRRX2OcZpi8PhOelOz9F/kcdGlCUrNH0N8L/2W/hT4QuIr2502bxFfREMs2ruJY1Yd1hAEf5g/WvZ4kSKNY40VEQBVVRgKB0AHaiivznE4zEYqXNXm5Pz/rQ9GMIxVoodRRRXMUFZPjTwv4d8XaK+keJtFstVsn6w3UIcA+qk8qfcYNFFVGcoSUouzQbngXjr9jLwDqUz3HhnXdX0AsSfIbF3CvsA+HA/4HXi3iz9mmXRdQa3XxwkwBxk6OV/9r0UV9VlWe5lKXJKq2vNJ/i1c5atCna9jb+Hv7Jn/CRSDz/iAYE6kR6N834Ezf0r234a/snfCzwvcR3mqW954mu4yCDqkgMAI7iFAFP0bdRRXNmWe5lKbp+1aXlZfkkyqdCmlex7haww21vHb28UcMMShI441CqijgAAcACqPi3QNF8UeH7nQvEOm2+o6deJsntrhNysP6EdQRyDyKKK+e'
    + 'jKUZKSdmdB82+Ov2LvCk08t54Z8X6ppMPLC1ubdbxU9lbcjY+pJ965DSf2Ozd3wgf4jbVz1XQ+f/R9FFfRUOIs0VNr2u3dJ/mjnlh6V9j6M/Zr+EGnfB7wvfaRYazeaq+o3QuZ5riNYwGCBAFVegwvcmvR6KK8HEYiriKrq1XeT3ZtGKirLYr6rYWOp6fLYalZ295azrtlguIhJHIPRlbII+teG/EL9kf4WeIJpLnRk1Dw1cPzjT5g0Gf+uUgYD6KVoorXC47FYR3oVHH0/wAtmEqcZ/Ejw/4nfsrnwqzGDx59pQcgSaPtb8xN/SuD0r4OTXt+Lb/hJo48nG7+zif082iivusvzjHVcNzznd+i/wAjhqUYKVkj2T4ffsa6bqlrHfav4/vXhJG6Gz01IWP/AAN3f+Ve9fCT4E/DP4dTpeaD4fSbUo/u6lqD/aLhfdWbhP8AgAWiivk8wznMMRKVOpVfL2Wi/C1zqp0acUmkekUUUV4xsFFFFAGf4n0LRvEejS6Tr+lWmpWM4/eW93CsiN74Pf36ivBPH37HHw51iZ7jw3qWq+HJHOfKicXNuPoknzD8HoortwmY4vBv9xUcfy+7YidOE/iR4p42/Zil0C+aBPHSzgHALaPtP/o+r3gD9lRvEVwqS+Pvs6k87NGyfzM9FFfWTz3MVhOf2mvpH/I5FQp89rHtXw5/ZE+GHh+eO61xtQ8TXEZztvpBHb5/65R4z9GLCvd9NsrPTrCKx0+0gtbWBQkMEEYjjjUdAqjgD6UUV8jisfisXK9eo5ev+Wx1xpxh8KI9d0vTta0e50nV7GC+sbyMx3FtcRh45VPUEHrXzf8AED9jHwXf3ct54X8S6noMbZb7LJEt5Cnsm4q4H1Y0UVeCzLF4OX+z1HG/3fc9AnThP4kcLY/seGe+8hviNhd2MjQ+f/R9dvpP7E/gyKzC6n4z1+6uM8yQRwwpj0ClXP60UV6uJ4izTRe2/BL9DKOHpdj/2QplbmRzdHJlYW0KZW5kb2JqCjYgMCBvYmoKPDwvVHlwZS9Gb250L1N1YnR5cGUvVHlwZTEvQmFzZUZvbnQvSGVsdmV0aWNhL0VuY29kaW5nL1dpbkFuc2lFbmNvZGluZz4+CmVuZG9iago3IDAgb2JqCjw8L1R5cGUvRm9udC9TdWJ0eXBlL1R5cGUxL0Jhc2VGb250L0hlbHZldGljYS1Cb2xkL0VuY29kaW5nL1dpbkFuc2lFbmNvZGluZz4+CmVuZG9iago4IDAgb2JqCjw8L1N1YnR5cGUvTGluay9SZWN0WzE4OS4xMyAyMDUuMSAxODEuNzMgMzA0LjI2XS9BPDwvUy9VUkkvVVJJKGh0dHBzOi8vcG9ydGFsc2NtbGFiLm1pY3Jvc29mdGNybXBvcnRhbHMuY29tL2NvbmRpY2lvbmVzLyk+Pi9Cb3JkZXJbMCAwIDBdL0NbMCAwIDFdPj4KZW5kb2JqCjkgMCBvYmoKPDwvTGVuZ3RoIDkyNS9GaWx0ZXIvRmxhdGVEZWNvZGU+PnN0cmVhbQp4nJ1VzY6bSBC+8xR1ieTRxu3+oYG+rcf2RI4SJ5lxcppLDzAOkTEZwBspp32ufac57QtsgcGLl2KCFskWLb6q+qrqq2oOAqYCOGij8T9MnSfneuto0L6GbeRwmCrPMNevDqut8wm/Vz8Jb/HbG4czDT8c12NKg6sF0wp812UKtAd57NxdAJQ2/wJ8AiBVx4MQ8oTAeCC4YhIJchA1mxNea13hwxRmSbrjsMzgU0VfnJCXqG3qtF4wl2nnHfPqGgW1kSsao9mNAKSyfXQmV9tvNFjqM1i24A+3y9UGliv4+Pn63XqxXs6XfXvPd1lgaAebvwB9THn1SOkrdzA8N2O4al53yXRDBTX2420nCr6KvrFQhglDWn/4Au+P+zL5fnzYJ6ENk78PEMVFFMNjHH61EBclAxHMuDuTXJi+b2UEC1zSt+BE0tJnNJP7ybLMMNb9FZW9YEaRZjc2RIb3k/n9FQqNv+ob+wLbRBsLwV9zDn/O0riA32D9ZU7ErtvkBqrTJrrykqi869eVJ6zfPUdxDlj//1VuwuEL5SbQL5Xbl5x5gg5iflkwL0BrcH3RK/fd8aHMSrtHmf/aTaN4rcePsqv8QfATYn84jVNR41LHDzzmnc/7el/1KQhiQhfZIUrCJDtgAtg9PJa5Lev5qQK2UU9+butdq/BBCpJrhoQ5itJDCgpfpNeeKwrVaq649olwv9ePVVHGEJ6iZ/B0jCMLxfFbjAcLe1tAkeyOSXwokWfF6eQv3zmT8DKD8D8ZcNiRDakEOHpfKd+8IDzQryCq3uGrLUo7dgQa154aLwzlDquoKwx1WuVnYTTnAWEoSchtiX2oC/rd7rKuFPrmglqCc3IgDTMeaXBrf+LGvsvCxO6J9YMTfGnXduF9/gA3SRFSVq7STAky3GJ9Q6SjAmY0GeatFwjfeJq4PZucuOoFWSZ5HLY6JBPi/cW0yfJjvLOvob7/LvHyvPon1zYP4312sMAD8q5skyd4LbKIwWJfT9NwFQhuC7wkBNfGUBv6FE+a/rpcTVOb7MFGaXJIimo6kz+ywcDyYjBPHtI8S+Pj76nNyzw+RAULs3SYQmdYz7drlqe2q2Y6NDHm29weiscYw6I0ccfPQWiInm2175fPZ5/w5vN6UBzS83uM1tfzzXAKhMEie8ht9AJ5r79VNwS8oaT7Q4HpDDPS49Zlw2UcuqGiRl2NzQiMA7esx6Fb1iN916tYiuE7+h/2+NZgCmVuZHN0cmVhbQplbmRvYmoKMTAgMCBvYmoKPDwvVHlwZS9QYWdlcy9Db3VudCAxL0tpZHNbMTEgMCBSXT4+CmVuZG9iagoxMSAwIG9iago8PC9UeXBlL1BhZ2UvTWVkaWFCb3hbMCAwIDU5NSA4NDJdL1Jlc291cmNlczw8L0ZvbnQ8PC9GMSA2IDAgUi9GMiA3IDAgUi9YaTAgMSAwIFI+Pi9YT2JqZWN0PDwvaW1nMCA1IDAgUj4+Pj4vUm90YXRlIDkwL0Fubm90c1s4IDAgUl0vQ29udGVudHNbMyAwIFIgOSAwIFIgNCAwIFJdL1BhcmVudCAxMCAwIFI+PgplbmRvYmoKMTIgMCBvYmoKPDwvVHlwZS9DYXRhbG9nL1BhZ2VzIDEwIDAgUj4+CmVuZG9iagp4cmVmCjAgMTMKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDE1IDAwMDAwIG4gCjAwMDAwMDAxMDMgMDAwMDAgbiAKMDAwMDAwMDQwMyAwMDAwMCBuIAowMDAwMDAwNDc5IDAwMDAwIG4gCjAwMDAwMDA3ODMgMDAwMDAgbiAKMDAwMDAxOTgwNCAwMDAwMCBuIAowMDAwMDE5ODkyIDAwMDAwIG4gCjAwMDAwMTk5ODUgMDAwMDAgbiAKMDAwMDAyMDE0OSAwMDAwMCBuIAowMDAwMDIxMTQxIDAwMDAwIG4gCjAwMDAwMjExOTQgMDAwMDAgbiAKMDAwMDAyMTM4NyAwMDAwMCBuIAp0cmFpbGVyCjw8L1NpemUgMTMvUm9vdCAxMiAwIFIvSW5mbyAyIDAgUi9JRCBbPGFmZmY0ZWNhM2FkOGZmMzUxYjA3MjJlYWRmNjg3Nzc3Pjw1YjlmOGNlNTU4YWU1YjVlYTY3NDQzN2ViOGYzODI5YT5dPj4KJWlUZXh0LTUuNS4xMwpzdGFydHhyZWYKMjE0MzQKJSVFT0YK');

// Loaded via <script> tag, create shortcut to access PDF.js exports.
var pdfjsLib = window['pdfjs-dist/build/pdf'];

// The workerSrc property shall be specified.
pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';

// Using DocumentInitParameters object to load binary data.
var loadingTask = pdfjsLib.getDocument({ data: pdfData });
loadingTask.promise.then(function (pdf) {
    console.log('PDF loaded');

    // Fetch the first page
    var pageNumber = 1;
    pdf.getPage(pageNumber).then(function (page) {
        console.log('Page loaded');

        var scale = 1.5;
        var viewport = page.getViewport({ scale: scale });

        // Prepare canvas using PDF page dimensions
        var canvas = document.getElementById('the-canvas');
        var context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render PDF page into canvas context
        var renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        var renderTask = page.render(renderContext);
        renderTask.promise.then(function () {
            console.log('Page rendered');
        });
    });
}, function (reason) {
    // PDF loading error
    console.error(reason);
});
 */




var CopmonentTypes = {
    entity: 1,
    field: 2,

    optionset: 9,

    relationship: 10,

    entityKey: 14,

    role: 20,
    rolePrivilege: 21,
    view: 26,
    workflow: 29,

    emailTemplate: 36,

    ribbon: 50,

    chart: 59,


    form: 60,
    webResource: 61,
    sitemap: 62,

    connectionRole: 63,

    hierarchyRule: 65,

    app: 80,

    pluginAssembly: 91,

    pluginStep: 92,

    routingRule: 150,
    convertRule: 154,


}


var SetDefinitions = [
    {
        type: CopmonentTypes.entity,
        isChild: false,
        link: "/tools/solution/edit.aspx?id={{0}}",
        set: "EntityDefinitions({0})",
        display: {
            description: "Entity",
            logicalName: "definition.LogicalName",
            displayName: "definition.DisplayName.UserLocalizedLabel.Label",
            parentlogicalName: null,
            class: "crm-entity",
        }
    },
    {
        type: CopmonentTypes.field,
        isChild: true,
        link: "/tools/systemcustomization/attributes/manageAttribute.aspx?appSolutionId={{0}}&attributeId={{1}}}&entityId={{2}}}",
        set: "EntityDefinitions({0})/Attributes({1})",
        display: {
            description: "Field",
            logicalName: "definition.LogicalName",
            displayName: "definition.DisplayName.UserLocalizedLabel.Label",
            parentlogicalName: "definition.DisplayName.UserLocalizedLabel.Label",
            class: "crm-field",
        }
    },

    {
        type: CopmonentTypes.optionset,
        isChild: false,
        link: "/tools/systemcustomization/optionset/optionset.aspx?_CreateFromId={{0}}&_CreateFromType=7100&appSolutionId={{0}}&id={{1}}",
        set: "GlobalOptionSetDefinitions({0})",
        display: {
            description: "OptionSet",
            logicalName: "definition.Name",
            displayName: "definition.DisplayName.UserLocalizedLabel.Label",
            parentlogicalName: "",
            class: "crm-optionset",
        }
    },


    {
        type: CopmonentTypes.relationship,
        isChild: false,
        link: "/tools/systemcustomization/relationships/manageRelationship.aspx?appSolutionId={{0}}&entityId={{2}}&entityRelationshipId={{1}}&entityRole=referenced",
        set: "RelationshipDefinitions({0})",
        display: {
            class: "crm-relationship",
        }
    },

    {
        type: CopmonentTypes.entityKey,
        isChild: true,
        link: "/tools/systemcustomization/AlternateKeys/manageAlternateKeys.aspx?_bView=true&appSolutionId={{0}}&entityId={{2}}&entityKeyId={{1}}",
        set: "EntityDefinitions({0})/Keys({1})",
        display: {
            description: "Entity key",
            logicalName: "definition.LogicalName",
            displayName: "definition.DisplayName.UserLocalizedLabel.Label",
            parentlogicalName: "",
            class: "crm-entitykey",
        }
    },

    {
        type: CopmonentTypes.role,
        isChild: false,
        link: "/biz/roles/edit.aspx?_CreateFromId={{0}}&_CreateFromType=7100&appSolutionId={{0}}&id={{1}}",
        set: "roles({0})",
        display: {
            description: "Rol",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "",
            class: "crm-role",
        }
    },

    {
        type: CopmonentTypes.rolePrivilege,
        isChild: false,
        link: "/biz/roles/edit.aspx?_CreateFromId={{0}}&_CreateFromType=7100&appSolutionId={{0}}&id={{1}}",
        set: "roles({0})",
        display: {
            description: "Rol privilege",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "",
            class: "crm-role",
        }
    },

    {
        type: CopmonentTypes.workflow,
        isChild: false,
        link: "/sfa/workflow/edit.aspx?_CreateFromId={{0}}&_CreateFromType=7100&appSolutionId={{0}}&id={{1}}",
        set: "workflows({0})",
        display: {
            description: "Workflow",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "",
            class: "crm-workflow",
        }
    },


    {
        type: CopmonentTypes.emailTemplate,
        isChild: false,
        link: "/tools/emailtemplateeditor/emailtemplateeditor.aspx?_CreateFromId={{0}}&_CreateFromType=7100&appSolutionId={{0}}&id={{1}}",
        set: "templates({0})",
        display: {
            description: "Email template",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "",
            class: "crm-emailtemplate",
        }
    },

    {
        type: CopmonentTypes.ribbon,
        isChild: false,
        link: null,
        set: "ribboncustomizations?$filter=ribboncustomizationid eq {0}",
        display: {
            description: "Ribbon",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "",
            class: "crm-ribbon",
        }
    },

    {
        type: CopmonentTypes.form,
        isChild: false,
        link: "/main.aspx?appSolutionId=%7b{0}%7d&etc=2&extraqs=formtype%3dmain%26formId%3d{1}%26action%3d-1&pagetype=formeditor",
        set: "systemforms({0})",
        display: {
            description: "Form",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "definition.objecttypecode",
            class: "crm-form",
        }
    },

    {
        type: CopmonentTypes.chart,
        isChild: false,
        link: "/main.aspx?appSolutionId={{0}}&extraqs=etc=10382&id={{1}}&pagetype=vizdesigner#622052463",
        set: "savedqueryvisualizations({0})",
        display: {
            description: "Chart",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "definition.objecttypecode",
            class: "crm-chart",
        }
    },

    {
        type: CopmonentTypes.view,
        isChild: false,
        link: "/tools/vieweditor/viewManager.aspx?appSolutionId={{0}}&entityId={{2}}&id={{1}}",
        set: "savedqueries({0})",
        display: {
            description: "View",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "definition.objecttypecode",
            class: "crm-form",
        }
    },



    {
        type: CopmonentTypes.webResource,
        isChild: false,
        link: "/main.aspx?_CreateFromId={{0}}&_CreateFromType=7100&appSolutionId={{0}}&etc=9333&id={{1}}&pagetype=webresourceedit",
        set: "webresourceset({0})",
        display: {
            description: "Web Resource",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "",
            class: "crm-webresource",
        }
    },

    {
        type: CopmonentTypes.sitemap,
        isChild: false,
        link: "",
        set: "sitemaps",
        display: {
            description: "Sitemap",
            logicalName: "",
            displayName: "",
            parentlogicalName: "",
            class: "crm-sitemap",
        }
    },


    {
        type: CopmonentTypes.connectionRole,
        isChild: false,
        link: "/connections/connectionroles/edit.aspx?_CreateFromId={{0}}&_CreateFromType=7100&appSolutionId={{0}}&id={{1}}",
        set: "connectionroles({0})",
        display: {
            description: "Connection role",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "",
            class: "crm-connectionrole",
        }
    },


    {
        type: CopmonentTypes.hierarchyRule,
        isChild: false,
        link: "/tools/systemcustomization/HierarchyRules/manageHierarchyRule.aspx?_bEdit=true&appSolutionId={{0}}&entityId={{2}}&hierarchySettingId={1}",
        set: "hierarchyrules({0})",
        display: {
            description: "Hierarchy rule",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "",
            class: "crm-hierarchyrule",
        }
    },

    {
        type: CopmonentTypes.app,
        isChild: false,
        link: "https://scmlab.crm4.dynamics.com/designer/app/{0}/{1}#/AppDesignerCanvas/{1}",
        set: "appmodules({0})",
        display: {
            description: "App",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "",
            class: "crm-app",
        }
    },

    {
        type: CopmonentTypes.pluginAssembly,
        isChild: false,
        link: null,
        set: "pluginassemblies({0})",
        display: {
            description: "Plugin",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "",
            class: "crm-assembly",
        }
    },

    {
        type: CopmonentTypes.pluginStep,
        isChild: false,
        link: null,
        set: "sdkmessageprocessingsteps({0})",
        display: {
            description: "Plugin step",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "",
            class: "crm-assemblystep",
        }
    },

    {
        type: CopmonentTypes.routingRule,
        isChild: false,
        link: "/main.aspx?appSolutionId={{0}}&etc=8181&extraqs=?_CreateFromId=%7b{0}%7d&_CreateFromType=7100&etc=8181&id=%7b{1}%7d&histKey=850460459&newWindow=true&pagetype=entityrecord",
        set: "routingrules({0})",
        display: {
            description: "Routing rule",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "",
            class: "crm-routingrule",
        }
    },

    {
        type: CopmonentTypes.convertRule,
        isChild: false,
        link: "/main.aspx?appSolutionId={{0}}&etc=9300&extraqs=?_CreateFromId=%7b{0}%7d&_CreateFromType=7100&etc=9300&id=%7b{1}%7d&histKey=925091788&newWindow=true&pagetype=entityrecord",
        set: "convertrules({0})",
        display: {
            description: "Convert rule",
            logicalName: "",
            displayName: "definition.name",
            parentlogicalName: "",
            class: "crm-convertrule",
        }
    },
]


var app = angular.module("almApp", [])
    .controller("almController", ["$scope", ($scope) => {
        $scope.todos = [
            { text: 'learn AngularJS', done: true },
            { text: 'build an AngularJS app', done: false }];
    }]);

app.service('xrmRepositoryService', ['$window', '$http', '$q', '$rootScope',
    function ($window, $http, $q, $rootScope) {

        this.getSolutions = function () {
            return webApiGet('solutions')
                .then(response => { return response.data.value; })
        }

        this.getSolutions = function () {
            return webApiGet('solutions')
                .then(response => { return response.data.value; })
        }

        this.getSolutionComponents = function (solutionId) {
            return webApiGet(`solutioncomponents?$filter=_solutionid_value eq ${solutionId}`)
                .then(response => { return response.data.value; })
        }

        /* this.getEntityDefinition = function (id) {
            return webApiGet(`EntityDefinitions(${id})`)
                .then(response => { return response.data })
        }

        this.getFieldDefinition = function (rootId, id) {
            return webApiGet(`EntityDefinitions(${rootId})/Attributes(${id})`)
                .then(response => { return response.data })
        }

        this.getRelationshipDefinition = function (id) {
            return webApiGet(`RelationshipDefinitions(${id})`)
                .then(response => { return response.data })
        }

        this.getFormDefinition = function (id) {
            return webApiGet(`systemforms(${id})`)
                .then(response => { return response.data })
        }


        this.getPluginAssemblyDefinition = function (id) {
            return webApiGet(`pluginassemblies(${id})`)
                .then(response => { return response.data })
        }

        this.getWebResourceDefinition = function (id) {
            return webApiGet(`webresourceset(${id})`)
                .then(response => { return response.data })
        } */


        this.getGenericResourceDefinition = function (definition, id, rootId) {

            var path = definition.isChild ?
                definition.set.replace("{0}", rootId).replace("{1}", id) :
                definition.set.replace("{0}", id);
            console.log(path);
            return webApiGet(path)
                .then(response => {
                    if (typeof response.data.value != 'undefined' && Array.isArray(response.data.value)) {
                        return response.data.value[0];
                    }
                    return response.data
                })
        }


        this.all = function (promises) {
            /* const isArray = Array.isArray(promises);
            const promisesLength = isArray ?
                promises.length :
                Object.keys(promises).length;
            const maxParallel = 20;
            const modLength = promisesLength % maxParallel;
            const iterations = (promisesLength - modLength) / maxParallel;
            let promise = Promise.resolve();
            console.log("promises.length:" + promisesLength);
            console.log("modLength:" + modLength);
            console.log("iterations:" + iterations);
            if (iterations == 0) {
                return $q.all(promises);
            }
            for (let iterator = 0; iterator < iterations; iterator++) {
                var promiseSusbsetArray = [];
                var promiseSusbsetObject = {};
                if (isArray) {
                    promiseSusbsetArray = promises.slice(iterator * maxParallel, maxParallel);
                    console.log(promiseSusbsetArray);
                } else {
                    var keys = Object.keys(promises);
                    var keysSubset = keys.slice(iterator * maxParallel, maxParallel);
                    for (const key of keysSubset) {
                        promiseSusbsetObject[key] = promises[key];
                    }
                    console.log(promiseSusbsetObject);
                }
                promise = promise.then(items => {
                    console.log(items);
                    if (isArray) {
                        return $q.all(promiseSusbsetArray)
                    } else {
                        return $q.all(promiseSusbsetObject)
                    }
                });
            }
            return promise; */


            return $q.all(promises);
        }

        webApiGet = function (options) {
            const url = getApiUrl() + options;
            console.log(url);
            return $http({
                method: 'GET',
                url: url
            })
                .then(response => {
                    return response;
                })
                .catch(function (data) {
                    console.log("Error:");
                    if (data.status == 403) { //forbiden
                        return webApiGet(options);
                    }
                    console.log(data);
                });
        }

        getApiUrl = function () {
            return `${GetGlobalContext().getClientUrl()}/api/data/v9.1/`;
        }

        this.getUrl = function () {
            return `${GetGlobalContext().getClientUrl()}`;
        }

    }]);

app.directive('mainView', ["xrmRepositoryService", (xrmRepositoryService) => {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            context: '=',
        },
        controller: function ($scope, $element) {



            xrmRepositoryService.getSolutions().then(solutions => {
                $scope.solutions = solutions;
                $scope.loadingSolutions = false;
            });

            initialize = function () {
                $scope.solutions = [];
                $scope.solutionComponents = [];
                $scope.loadingSolutions = true;
                $scope.loadingSolutionComponents = false;
                $scope.selectedSolutions = [];
                $scope.selectedSolutionComponents = [];
                $scope.selectedSolution = null;
            }

            $scope.$watch('selectedSolutions', function (newValue, oldValue) {
                if (newValue.length == 1) {
                    $scope.selectedSolution = newValue[0];
                } else {
                    $scope.selectedSolution = null;
                }
            }, true);

            $scope.$watch('selectedSolution', function (newValue, oldValue) {
                if (typeof newValue != 'undefined' && newValue != oldValue) {
                    if (newValue != null) {
                        window.scrollTo(0, 0);
                        $scope.solutionComponents.splice(0, $scope.solutionComponents.length);
                        $scope.loadingSolutionComponents = true;
                        const solutionId = newValue["solutionid"];
                        xrmRepositoryService.getSolutionComponents(solutionId)
                            .then(solutionComponents => {
                                $scope.solutionComponents = solutionComponents;
                                let promiseObj = {};
                                for (const solutionComponent of solutionComponents) {

                                    const type = solutionComponent["componenttype"];
                                    const objectId = solutionComponent["objectid"];
                                    const rootSolutionObjectId = solutionComponent["rootsolutioncomponentid"];
                                    let rootObjectId = null;
                                    if (rootSolutionObjectId != null) {
                                        rootObjectId = $scope.getObjectIdFromSolutionObjectId(rootSolutionObjectId);
                                    }
                                    var promise = getPromiseForSolutionComponentDefinition(type, objectId, rootObjectId);
                                    if (promise != null) {
                                        promiseObj[objectId] = promise;
                                    }
                                }
                                return xrmRepositoryService.all(promiseObj);
                            }).then(definitions => {
                                for (const item of $scope.solutionComponents) {
                                    item["definition"] = {};
                                }
                                for (const objectId in definitions) {
                                    var value = definitions[objectId];
                                    setDefinitionToSolutionComponent(objectId, value);
                                }
                                $scope.loadingSolutionComponents = false;

                            })
                    } else {
                        $scope.solutionComponents.splice(0, $scope.solutionComponents.length);
                    }
                }
            });


            $scope.getObjectIdFromSolutionObjectId = function (solutionObjectId) {

                for (const solutionComponent of $scope.solutionComponents) {
                    var componentId = solutionComponent["solutioncomponentid"];
                    console.log("componentId: " + componentId);
                    if (componentId.toLowerCase() == solutionObjectId.toLowerCase()) {
                        console.log("Found parent component:");
                        console.log(solutionComponent);
                        return solutionComponent["objectid"];
                    }
                }
                return null;
            }

            setDefinitionToSolutionComponent = function (objectId, definition) {
                for (const solutionComponent of $scope.solutionComponents) {
                    if (solutionComponent["objectid"] == objectId) {
                        solutionComponent["definition"] = definition;
                        break;
                    }
                }
            }

            getPromiseForSolutionComponentDefinition = function (type, objectId, rootObjectId) {

                var definition = getTypeDefinition(type);
                if (definition != null) {
                    return xrmRepositoryService.getGenericResourceDefinition(definition, objectId, rootObjectId);
                }
                return null
            }

            getTypeDefinition = function (type) {
                for (const definition of SetDefinitions) {
                    if (definition.type == type) {
                        return definition;
                    }
                }
                return null;
            }

            $scope.nonSolutionsSelected = function () {
                return typeof $scope.selectedSolutions != 'undefined' && $scope.selectedSolutions.length == 0;
            }

            $scope.oneSolutionSelected = function () {
                return typeof $scope.selectedSolutions != 'undefined' && $scope.selectedSolutions.length == 1;
            }

            $scope.moreThanOneSolutionSelected = function () {
                return typeof $scope.selectedSolutions != 'undefined' && $scope.selectedSolutions.length > 1;
            }

            $scope.mergeSolutions = function () {
                if ($scope.selectedSolutions.length < 2) {
                    $scope.raiseMessage("Error", "Selecciona más de una solución para hacer merge", null, "Ok");
                    return;
                }
                $scope.showMergeSolutionsModal();
            }


            $scope.showMergeSolutionsModal = function () {
                $('#mergeSolutionsModal').modal(null);
            }

            $scope.raiseMessage = function (title, text, ok, cancel) {
                $scope.errTitle = title;
                $scope.errText = text;
                $scope.errOk = ok;
                $scope.errCancel = cancel;

                $('#errorModal').modal(null);
            }

            initialize();

        },
        template:
            ['<div>',

                //Toolbar
                '',
                '<div class="container">',
                '   <div class="btn-group" role="group" aria-label="Button group with nested dropdown">',
                //'   <button type="button" class="btn btn-secondary" ng-disabled="!moreThanOneSolutionSelected();">Merge solutions</button>',
                //'   <button type="button" class="btn btn-secondary">2</button>',
                '       <div class="btn-group" role="group">',
                '           <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">',
                '               Solutions',
                '           </button>',
                '           <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">',
                '               <a class="dropdown-item" href="#" ng-click="mergeSolutions()">Merge solutions</a>',
                //'             <a class="dropdown-item" href="#">Dropdown link</a>',
                '           </div>',
                '       </div>',
                '   </div>',
                '</div>', //container


                //Content
                '<div class="container" style="margin-top:20px; padding: 10px">',
                '   <div class="row">',
                '       <div class="col-md-4">',
                '           <h5 class="card-title">Solutions</h5>',
                '           <div ng-show="loadingSolutions" style="text-align:center;"><div>Loading solutions...</div><div class="spinner-border" role="status"></div></div>',
                '           <solution-list-view ng-if="solutions.length>0" solutions="solutions" selected-solutions="selectedSolutions"/>',
                '       </div>',
                '       <div class="col-md-8"  ng-if="selectedSolution!=null">',
                '           <h5 class="card-title">Solution components ({{selectedSolution.friendlyname}})</h5>',
                '           <div ng-show="loadingSolutionComponents" style="text-align:center;"><div>Loading solution components...</div><div class="spinner-border" role="status"></div></div>',
                '           <solution-component-list-view ng-if="solutionComponents.length>0" selected-solution="selectedSolution" solution-components="solutionComponents" selected-solution-components="selectedSolutionComponents"/>',
                '       </div>',
                '   </div>',
                '</div>',
                '<div>',


                //merge solutions modal
                '<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" id="mergeSolutionsModal">',
                '   <div class="modal-dialog modal-lg">',
                '       <div class="modal-content">',
                '           <merge-solutions-view  solutions="solutions" selected-solutions="selectedSolutions"/>',
                '       </div>',
                '   </div>',
                '</div>',


                //err message modal
                '<div class="modal" tabindex="-1" role="dialog" id="errorModal">',
                '   <div class="modal-dialog" role="document">',
                '       <div class="modal-content">',
                '           <div class="modal-header">',
                '               <h5 class="modal-title">{{ errTitle }}</h5>',
                '               <button type="button" class="close" data-dismiss="modal" aria-label="Close">',
                '                   <span aria-hidden="true">&times;</span>',
                '               </button>',
                '           </div>',
                '           <div class="modal-body">',
                '               <p>{{ errText }}</p>',
                '           </div>',
                '           <div class="modal-footer">',
                '               <button type="button" class="btn btn-primary"  ng-show="errOk!=null">{{ errOk }}</button>',
                '               <button type="button" class="btn btn-secondary" data-dismiss="modal" ng-show="errCancel!=null">{{ errCancel }}</button>',
                '           </div>',
                '       </div>',
                '   </div>',
                '</div>',
                '</div>',
                '</div>'].join(""),
        replace: true
    };

}]);

app.directive('mergeSolutionsView', () => {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            solutions: '=',
            selectedSolutions: '=',
        },
        controller: function ($scope, $element) {
            $scope.destinationType = null;
            $scope.selectedExistingSolution = null;


            $scope.$watch('selectedExistingSolution', function(newValue){

                console.log(newValue);
            })
        },
        template:
            ['<div>',
                '   <div class="row">',
                '       <div class="col-sm">',
                '           <div class="container">',
                '               <div class="jumbotron" style="margin: 10px">',
                '                   <h4 >Solutions for merge</h1>',
                '                   <p>All the components from this solutions will be added to the destination solution without modify anything in the sources</p>',
                '                   <hr>',
                '                   <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>',
                '               </div>',
                '           </div>',
                '       </div>',
                '       <div class="col-sm">',
                '           <div class="container">',
                '               <div class="jumbotron" style="margin: 10px">',
                '                   <h4 >Solution result</h1>',
                '                   <p>All the components from the source solutions will be added to this solution</p>',
                '                   <hr>',
                '                   <div class="row"><div class="form-group"><label>Destination solution</label><select class="form-control" ng-model="destinationType"><option value="0">Existing solution</option><option value="1">New solution</option></select></div></div>',
                '                   <div ng-if="destinationType == 0">',
                '                       <autocomplete-view placeholder="Solution" data="solutions" display-property="friendlyname" selected-item="selectedExistingSolution"/>',
                '                   </div>',
                '               </div>',
                '           </div>',
                '       </div>',
                '   </div>',
                '</div>'].join(""),
        replace: true
    };

});

app.directive('autocompleteView', () => {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            data: '=',
            selectedItem : '=',
            placeholder: '@',
            displayProperty: '@',
        },
        controller: function ($scope, $element) {
            $scope.selectedItem = "test!";
            //TODO: continue from here. SelectedItem doesn't seem upload in the mainView
            $scope.autocomplete = function(inp, arr) {
                var currentFocus;
                inp.addEventListener("input", function (e) {
                    var a, b, i, val = this.value;
                    closeAllLists();
                    if (!val) { return false; }
                    currentFocus = -1;
                    a = document.createElement("DIV");
                    a.setAttribute("id", this.id + "autocomplete-list");
                    a.setAttribute("class", "autocomplete-items");
                    this.parentNode.appendChild(a);
                    for (let i = 0; i < arr.length; i++) {
                        let display = arr[i][$scope.displayProperty];
                        if (display.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                            b = document.createElement("DIV");
                            b.innerHTML = "<strong>" + display.substr(0, val.length) + "</strong>";
                            b.innerHTML += display.substr(val.length);
                            b.innerHTML += "<input type='hidden' value='" + display + "'>";
                            b.addEventListener("click", function (e) {
                                $scope.selectedItem = arr[i];
                                inp.value = this.getElementsByTagName("input")[0].value;
                                closeAllLists();
                            });
                            a.appendChild(b);
                        }
                    }
                });
                inp.addEventListener("keydown", function (e) {
                    var x = document.getElementById(this.id + "autocomplete-list");
                    if (x) x = x.getElementsByTagName("div");
                    if (e.keyCode == 40) {
                        currentFocus++;
                        addActive(x);
                    } else if (e.keyCode == 38) { //up
                        currentFocus--;
                        addActive(x);
                    } else if (e.keyCode == 13) {
                        e.preventDefault();
                        if (currentFocus > -1) {
                            if (x) x[currentFocus].click();
                        }
                    }
                });
                function addActive(x) {
                    if (!x) return false;
                    removeActive(x);
                    if (currentFocus >= x.length) currentFocus = 0;
                    if (currentFocus < 0) currentFocus = (x.length - 1);
                    x[currentFocus].classList.add("autocomplete-active");
                }
                function removeActive(x) {
                    for (var i = 0; i < x.length; i++) {
                        x[i].classList.remove("autocomplete-active");
                    }
                }
                function closeAllLists(elmnt) {
                    var x = document.getElementsByClassName("autocomplete-items");
                    for (var i = 0; i < x.length; i++) {
                        if (elmnt != x[i] && elmnt != inp) {
                            x[i].parentNode.removeChild(x[i]);
                        }
                    }
                }
                document.addEventListener("click", function (e) {
                    closeAllLists(e.target);
                });
            }

            $scope.autocomplete(document.getElementById("autocompleteInput"), $scope.data);
        },
        template:
            ['<div>',
                '   <div class="autocomplete" style="width:300px;">',
                '       <input id="autocompleteInput" type="text" placeholder="{{placeholder}}" />',
                '   </div>',
                '</div>'].join(""),
        replace: true
    };

});

app.directive('solutionComponentView', () => {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            solutionComponent: '=',
        },
        controller: function ($scope, $element) {


            $scope.isChild = false;
            $scope.isRelationship = false;
            setTypeDescription = function () {
                var type = $scope.solutionComponent["componenttype"];
                var isChild = false;
                var description = `Not implemented (componenttype=${type})`;
                var logicalName = "";
                var displayName = "";
                var parentlogicalName = "";
                var extraData = null;
                var isRelationship = false;
                var _class = "";
                if (type == CopmonentTypes.relationship) {
                    description = "Relationship";
                    logicalName = "definition.IntersectEntityName";
                    displayName = "definition.DisplayName.UserLocalizedLabel.Label";
                    parentlogicalName = "definition.DisplayName.UserLocalizedLabel.Label";
                    isChild = true;
                    isRelationship = true;

                    var relationshipType = $scope.getProperty("definition.RelationshipType");
                    var shortType = null;
                    var entity1 = null;
                    var entity2 = null;
                    var intersect = null;

                    if (relationshipType == "ManyToManyRelationship") {
                        shortType = "N:N"
                        entity1 = $scope.getProperty("definition.Entity1LogicalName");
                        entity2 = $scope.getProperty("definition.Entity2LogicalName");
                        intersect = $scope.getProperty("definition.IntersectEntityName");
                    } else if (relationshipType == "OneToManyRelationship") {
                        shortType = "1:N"
                        entity1 = $scope.getProperty("definition.ReferencedEntity");
                        entity2 = $scope.getProperty("definition.ReferencingEntity");
                        intersect = $scope.getProperty("definition.SchemaName");
                    } else if (relationshipType == "ManyToOneRelationship") {
                        shortType = "N:1"
                        entity1 = $scope.getProperty("definition.ReferencedEntity");
                        entity2 = $scope.getProperty("definition.ReferencingEntity");
                        intersect = $scope.getProperty("definition.SchemaName");
                    }
                    extraData = `${shortType} from ${entity1} to ${entity2} (${intersect})`;
                    _class = "crm-relationship";

                } else {
                    let definition = getTypeDefinition(type);
                    if (definition != null) {
                        _class = definition.display.class;
                        isChild = definition.isChild;
                        description = definition.display.description;
                        logicalName = definition.display.logicalName;
                        displayName = definition.display.displayName;
                        parentlogicalName = definition.display.parentlogicalName;
                    }

                }
                $scope.class = _class;
                $scope.extraData = extraData;
                $scope.logicalName = logicalName;
                $scope.displayName = displayName;
                $scope.parentlogicalName = parentlogicalName;
                $scope.isChild = isChild;
                $scope.isRelationship = isRelationship;
                $scope.typeDescription = description;

                $('[data-toggle="tooltip"]').tooltip();
            }

            $scope.getProperty = function (path, obj = $scope.solutionComponent, separator = '.') {
                if (typeof obj == 'undefined' || obj == null) {
                    return null;
                }
                if (typeof path == 'undefined' || path == null) {
                    return null;
                }
                var properties = Array.isArray(path) ? path : path.split(separator);
                return properties.reduce((prev, curr) => prev && prev[curr], obj);
            }



            getTypeDefinition = function (type) {
                for (const definition of SetDefinitions) {
                    if (definition.type == type) {
                        return definition;
                    }
                }
                return null;
            }


            $scope.getClass = function () {
                return `crm-resource ${$scope.class}`;
            }

            setTypeDescription();

            $scope.getDisplayForParent = function () {
                var displayName = $scope.getProperty($scope.displayName);
                var logicalName = $scope.getProperty($scope.logicalName);
                var extraData = $scope.extraData;
                return `${displayName} (${logicalName}) [${extraData}]`;
            }

            $scope.getDisplayForChild = function () {

                var parentLogicalName = $scope.getProperty($scope.parentlogicalName);
                var displayName = $scope.getProperty($scope.displayName);
                var logicalName = $scope.getProperty($scope.logicalName);
                var extraData = $scope.extraData;

                return `(Entity=${parentLogicalName}) ${displayName} (${logicalName}) [${extraData}]`;
            }

            $scope.getDisplayForRelationship = function () {
                var extraData = $scope.extraData;
                return `${extraData}`;
            }




        },
        template:
            ['<div>',
                '<div ng-show="!isChild" class="row"><span class="col-md-3 {{getClass()}}">[{{typeDescription}}]</span><span class="col-md-8 crm-row" data-toggle="tooltip" data-placement="top" ng-attr-title="{{getDisplayForParent()}}">{{getDisplayForParent()}}</span></div>',
                '<div ng-show="isChild && !isRelationship" class="row"><span class="col-md-3 {{getClass()}}">[{{typeDescription}}]</span><span  class="col-md-8 crm-row" data-toggle="tooltip" data-placement="top" ng-attr-title="{{getDisplayForChild()}}">{{getDisplayForChild()}}</span></div>',
                '<div ng-show="isChild && isRelationship" class="row"><span class="col-md-3 {{getClass()}}">[{{typeDescription}}]</span><span  class="col-md-8 crm-row" data-toggle="tooltip" data-placement="top" ng-attr-title="{{getDisplayForRelationship()}}">{{getDisplayForRelationship()}}</span></div>',
                '</div>'].join(""),
        replace: true
    };

});

app.directive('solutionComponentListView', () => {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            selectedSolution: '=',
            solutionComponents: '=',
            selectedSolutionComponents: '=',
        },
        controller: function ($scope, $element) {


            $scope.selectOneSolutionComponent = function (solutionComponent) {
                $scope.selectedSolutionComponents.splice(0, $scope.selectedSolutionComponents.length)
                $scope.selectedSolutionComponents.push(solutionComponent);
            }

            $scope.selectSolutionComponent = function (solutionComponent) {
                var inSelectedArray = isSolutionComponentInSelectedArray(solutionComponent);
                if (inSelectedArray) {
                    var index = $scope.selectedSolutionComponents.map(k => { return k["solutioncomponentid"] }).indexOf(solutionComponent["solutioncomponentid"]);
                    $scope.selectedSolutionComponents.splice(index, 1);
                } else {
                    $scope.selectedSolutionComponents.push(solutionComponent);
                }
            }

            $scope.isSelected = function (solutionComponent) {
                return isSolutionComponentInSelectedArray(solutionComponent);
            }

            isSolutionComponentInSelectedArray = function (solutionComponent) {
                return $scope.selectedSolutionComponents.filter(k => { return solutionComponent["solutioncomponentid"] == k["solutioncomponentid"] }).length > 0;
            }

            $scope.$watch('filter', function (newValue, oldValue) {
                $scope.loading = true;
                if (typeof newValue != 'undefined' && newValue != oldValue) {
                    var filtered = filterFunction($scope.solutionComponents);
                    setFilteredSolutionComponents(filtered);
                }
                $scope.loading = false;

            })

            function filterFunction(allSolutionComponents) {
                var filter = $scope.filter;
                if (filter == null || filter == "") {
                    return allSolutionComponents;
                } else {
                    var searchFields = ["friendlyname", "uniquename"];
                    var filteredSolutionComponents = $scope.solutionComponents.filter(solutionComponent => {
                        for (const field of searchFields) {
                            if (solutionComponent[field].toLowerCase().indexOf(filter) > -1) {
                                return true;
                            }
                        }
                        return false;
                    });
                    return filteredSolutionComponents;
                }
            }

            initialize = function () {
                $scope.filter = null;
                setFilteredSolutionComponents($scope.solutionComponents);
            }

            setFilteredSolutionComponents = function (solutionComponents) {
                $scope.filteredSolutionComponents = [];
                for (const solutionComponent of solutionComponents) {
                    $scope.filteredSolutionComponents.push(solutionComponent);
                }
            }

            $scope.openResource = function (solutionComponent) {
                const componentId = solutionComponent["objectid"];
                const type = solutionComponent["componenttype"];
                let definition = getTypeDefinition(type);
                let link = definition.link;
                if (link == null) {
                    alert("Selected component cannot be opened");
                    return;
                }
                let isChild = definition.isChild;
                const rootSolutionObjectId = solutionComponent["rootsolutioncomponentid"];
                let parentEntityId = isChild ? getObjectIdFromSolutionObjectId(rootSolutionObjectId) : null;
                let solutionId = $scope.selectedSolution["solutionid"];
                let path = isChild ?
                    link.replaceAll("{0}", solutionId)
                        .replaceAll("{1}", componentId)
                        .replaceAll("{2}", parentEntityId) :
                    link.replaceAll("{0}", solutionId)
                        .replaceAll("{1}", componentId);

                const url = `${GetGlobalContext().getClientUrl()}${path}`;
                console.log(url);
                var win = window.open(url, '_blank');
                win.focus();
            }

            getObjectIdFromSolutionObjectId = function (solutionObjectId) {
                for (const solutionComponent of $scope.solutionComponents) {
                    if (solutionComponent["solutioncomponentid"] == solutionObjectId) {
                        return solutionComponent["objectid"];
                    }
                }
            }

            getTypeDefinition = function (type) {
                for (const definition of SetDefinitions) {
                    if (definition.type == type) {
                        return definition;
                    }
                }
                return null;
            }

            initialize();

        },
        template:
            ['<div>',
                '<div class="form-group">',
                '<input type="text" class="form-control" ng-model="filter"  placeholder="Search solution components" ng-model-options="{ debounce: 500 }"/>',
                '</div>',
                '<div ng-if="loading" style="text-align:center;"><div>Filtering solution components...</div><div class="spinner-border" role="status"></div></div>',
                '<ul class="list-group" ng-if="!loading">',
                '   <li class="list-group-item list-group-item-action" ng-class="isSelected(solutionComponent) ? \'active\' : undefined" ng-repeat="solutionComponent in filteredSolutionComponents" style="cursor:pointer;">',
                '       <div class="row">',
                '           <div class="col-md-1"  ng-click="selectSolutionComponent(solutionComponent)" ng-show="isSelected(solutionComponent)"><i class="fa fa-check-square"></i></div>',
                '           <div class="col-md-1"  ng-click="selectSolutionComponent(solutionComponent)" ng-show="!isSelected(solutionComponent)"><i class="fa fa-square"></i></div>',
                '           <div class="col-md-1" style="width: auto; margin-right:10px"><span>{{$index + 1}}.</span></div>',
                '           <solution-component-view class="col-md-8" ng-if="solutionComponent!=null && solutionComponent.definition!=null" solution-component="solutionComponent"  ng-click="selectOneSolutionComponent(solutionComponent)" />',
                //'           <div style="margin-left: 10px" ng-click="openResource(solutionComponent)"><i class="fa fa-external-link-alt" aria-hidden="true"></i></div>',
                '       </div>',
                '   </li>',
                '</ul>',

                '</div>'].join(""),
        replace: true
    };

});

app.directive('solutionListView', () => {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            solutions: '=',
            selectedSolutions: '=',
        },
        controller: function ($scope, $element) {


            $scope.selectOneSolution = function (solution) {
                $scope.selectedSolutions.splice(0, $scope.selectedSolutions.length)
                $scope.selectedSolutions.push(solution);
            }

            $scope.selectSolution = function (solution) {
                var inSelectedArray = isSolutionInSelectedArray(solution);
                if (inSelectedArray) {
                    var index = $scope.selectedSolutions.map(k => { return k["solutionid"] }).indexOf(solution["solution"]);
                    $scope.selectedSolutions.splice(index, 1);
                } else {
                    $scope.selectedSolutions.push(solution);
                }
            }

            $scope.isSelected = function (solution) {
                return isSolutionInSelectedArray(solution);
            }

            isSolutionInSelectedArray = function (solution) {
                return $scope.selectedSolutions.filter(k => { return solution["solutionid"] == k["solutionid"] }).length > 0;
            }

            $scope.$watch('filter', function (newValue, oldValue) {
                $scope.loading = true;
                if (typeof newValue != 'undefined' && newValue != oldValue) {
                    var filtered = filterFunction($scope.solutions);
                    setFilteredSolutions(filtered);
                }
                $scope.loading = false;

            })


            function filterFunction(allSolutions) {
                var filter = $scope.filter;
                if (filter == null || filter == "") {
                    return allSolutions;
                } else {
                    var searchFields = ["friendlyname", "uniquename"];
                    var filteredSolutions = $scope.solutions.filter(solution => {
                        for (const field of searchFields) {
                            if (solution[field].toLowerCase().indexOf(filter) > -1) {
                                return true;
                            }
                        }
                        return false;
                    });
                    return filteredSolutions;
                }
            }

            initialize = function () {
                $scope.filter = null;
                setFilteredSolutions($scope.solutions);
            }

            setFilteredSolutions = function (solutions) {
                $scope.filteredSolutions = [];
                for (const solution of solutions) {
                    $scope.filteredSolutions.push(solution);
                }
            }

            $scope.openResource = function (solution) {
                const url = `${GetGlobalContext().getClientUrl()}/tools/solution/edit.aspx?id=%7b${solution["solutionid"]}%7d#`;
                var win = window.open(url, '_blank');
                win.focus();
            }

            initialize();

        },
        template:
            ['<div>',
                '<div class="form-group">',
                '<input type="text" class="form-control" ng-model="filter"  placeholder="Search solutions" ng-model-options="{ debounce: 500 }"/>',
                '</div>',
                '<div ng-if="loading" style="text-align:center;"><div>Filtering solutions...</div><div class="spinner-border" role="status"></div></div>',
                '<ul class="list-group" ng-if="!loading">',
                //
                '   <li class="list-group-item list-group-item-action" ng-class="isSelected(solution) ? \'active\' : undefined" ng-repeat="solution in filteredSolutions" style="cursor:pointer;">',
                '       <div class="row ">',
                '           <div style="width: 30px;"  ng-click="selectSolution(solution)" ng-show="isSelected(solution)"><i class="fa fa-check-square"></i></div>',
                '           <div style="width: 30px;"  ng-click="selectSolution(solution)" ng-show="!isSelected(solution)"><i class="fa fa-square"></i></div>',
                '           <div style="width: auto; margin-right:10px"><span>{{$index + 1}}.</span></div>',
                '           <solution-view solution="solution" ng-click="selectOneSolution(solution)" />',
                '           <div style="margin-left: 10px" ng-click="openResource(solution)"><i class="fa fa-external-link-alt" aria-hidden="true"></i></div>',
                '       </div>',
                '   </li>',
                '</ul>',

                '</div>'].join(""),
        replace: true
    };

});

app.directive('alertView', () => {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            title: '=',
            text: '=',
            ok: '=',
            cancel: '=',
            show: '=',
        },
        controller: function ($scope, $element) {
            $scope.showCancel = function () {
                return typeof ($scope.cancel) != 'undefined' && $scope.cancel != null;
            }

            $scope.showOk = function () {
                return typeof ($scope.ok) != 'undefined' && $scope.ok != null;
            }
            $scope.$watch('show', function (newValue, oldValue) {
                if (newValue != null && newValue != oldValue) {
                    if (newValue) {
                        $('#errorModal').modal(null);
                    }
                }
            })
        },
        template:
            ['<div>',
                '<div class="modal" tabindex="-1" role="dialog" id="errorModal">',
                '   <div class="modal-dialog" role="document">',
                '       <div class="modal-content">',
                '           <div class="modal-header">',
                '               <h5 class="modal-title">{{title}}</h5>',
                '               <button type="button" class="close" data-dismiss="modal" aria-label="Close">',
                '                   <span aria-hidden="true">&times;</span>',
                '               </button>',
                '           </div>',
                '           <div class="modal-body">',
                '               <p>{{text}}</p>',
                '           </div>',
                '           <div class="modal-footer">',
                '               <button type="button" class="btn btn-primary"  ng-show="showOk()">{{ok}}</button>',
                '               <button type="button" class="btn btn-secondary" data-dismiss="modal" ng-show="showCancel()">{{cancel}}</button>',
                '           </div>',
                '       </div>',
                '   </div>',
                '</div>',
                '</div>'].join(""),
        replace: true
    };

});

app.directive('solutionView', () => {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            solution: '=',
            isSelected: '=',
        },
        controller: function ($scope, $element) {
        },
        template:
            ['<div>',
                '<div ng-bind="solution.friendlyname"></div>',
                '</div>'].join(""),
        replace: true
    };

});

String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};