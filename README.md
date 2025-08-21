mvn -Borg.apache.maven.plugins:maven-archetype-plugin:3.3.1: generate -D archetypeGroupId=com.adobe.aem D archetypeArtifactId=aem-project-archetype -D archetypeVersion-54 -D appTitle="Sutherland" -D appId="sutherland" -D groupId="com.sutherland"

mvn clean

mvn -PautoInstallSinglePackage clean install