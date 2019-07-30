

module.exports = function ({
  name,
  virtualTeamId,
  virtualTeamDbId,
  virtualTeamName,
  teamId,
  teamName,
  tenantId = '1000148',
  tenantName = 'dCloud',
  siteId = '1000350',
  siteName = 'Site-1'
}) {
  const scriptId = Date.now()
  const startDate = parseInt((Date.now() / 10000.0) * 10000)
  const endDate = 1752624000000
  return [
    {
      "type": "routing-strategy",
      "attributes": {
        "mediaFileIds__sa": [
          "AWX8rlE7_1uTFjV88RNr",
          "AWX8rlE7_1uTFjV88RNr"
        ],
        "legacyJscriptId__l": 1004751,
        "jscriptId__s": "AWtmnszFhW2lRXH-xYYF",
        "startTimestamp__l": parseInt((Date.now() / 10000.0) * 10000),
        "legacyVirtualTeamId__l": virtualTeamDbId,
        "name__s": name,
        "strategyStatus__s": "active",
        "status__i": 1,
        "script__s": `<call-distribution-script name="${name}" scriptid="${scriptId}" status="active" start-date="${startDate}" end-date="${endDate}" execution-start-time-of-day="18000000" execution-end-time-of-day="18000000" repetition="daily" xmlns="http://cha.transerainc.com/gen/cds">
          <day-of-week>sunday</day-of-week>
          <day-of-week>monday</day-of-week>
          <day-of-week>tuesday</day-of-week>
          <day-of-week>wednesday</day-of-week>
          <day-of-week>thursday</day-of-week>
          <day-of-week>friday</day-of-week>
          <day-of-week>saturday</day-of-week>
          <vdn enterprise-id="${tenantId}" enterprise-name="dCloud" id="${virtualTeamDbId}" vteam-id="${virtualTeamDbId}" vteam-name="${virtualTeamName}" uri="" maximum-time-in-queue="9999" is-monitoring-permitted="true" is-queuing-permitted="true" is-recording-permitted="true" is-retransfer-permitted="false" overflow-uri="" algorithm="longest-waiting-agent-based" num-ring-no-answer-retries="3" num-teams-to-try-for-other-failures="3">
            <ivr-url park-url="http://localhost/dCloud/defaultmusic_on_hold.wav" requeue-url="http://localhost:8000/dCloud/"/>
            <load-balance>
              <cycle number="1">
                <agent-group id="${teamId}" name="${teamName}" display-name="${teamName}" enterprise-id="${tenantId}" enterprise-name="${tenantName}" site-id="${siteId}" site-name="${siteName}" site-display-name="${siteName}" capacity="0" status="active" uri="0" priority="0"/>
              </cycle>
            </load-balance>
          </vdn>
          <call-flow-params>
            <param name="MIQ2" value="defaultmusic_on_hold.wav" valueDataType="string" qualifier="mediaFile" description="(mediaFile, A valid media file.)"/>
          </call-flow-params>
        </call-distribution-script>`,
        "endDate__l": endDate,
        "virtualTeamId__s": virtualTeamId,
        "defaultFlag__i": 0,
        "daily__i": 1,
        "monday__i": 1,
        "tuesday__i": 1,
        "wednesday__i": 1,
        "thursday__i": 1,
        "friday__i": 1,
        "saturday__i": 1,
        "sunday__i": 1,
        "grs__i": 0,
        "startDate__l": startDate,
        "currentStatus__i": 0,
        "endTimestamp__l": endDate,
        "startTime__l": 18000000,
        "endTime__l": 18000000
      }
    }
  ]
}
